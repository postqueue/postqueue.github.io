import React, { useState, useEffect, useMemo, useRef } from 'react';
import {
  Copy,
  Check,
  Edit2,
  Trash2,
  ArrowUp,
  ArrowDown,
  Download,
  Upload,
  Plus,
  Search,
  Hash,
  Sparkles,
  RotateCcw,
  LayoutGrid,
  Columns,
  List,
  FileSpreadsheet,
  X,
  Film,
} from 'lucide-react';
import { ui, type SupportedLanguage } from '../i18n/ui';
import {
  type PostItem,
  getEmptySlots,
  getInitialSlots,
} from '../data/starterHooks';

// Storage key v2 ensures a clean, empty start for creators adding their own content
const STORAGE_KEY = 'postqueue_slots_v2';
const MAX_CAPTION_CHARS = 2200;

interface ContentPlannerProps {
  currentLang?: SupportedLanguage;
}

export default function ContentPlanner({ currentLang = 'en' }: ContentPlannerProps) {
  const t = (key: keyof typeof ui['en']) => ui[currentLang]?.[key] ?? ui['en'][key];

  // State
  const [slots, setSlots] = useState<PostItem[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeView, setActiveView] = useState<'pipeline' | 'board' | 'list'>('pipeline');
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<'all' | 'idea' | 'filmed' | 'posted'>('all');

  // Edit Modal State
  const [editingSlot, setEditingSlot] = useState<PostItem | null>(null);
  const [editForm, setEditForm] = useState<PostItem>({
    id: '',
    day: 1,
    hook: '',
    rawFileName: '',
    caption: '',
    hashtags: '',
    status: 'idea',
    updatedAt: 0,
  });

  // Feedback Toasts
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Hidden file input for JSON import
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Show Toast Helper
  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage((prev) => (prev === msg ? null : prev));
    }, 2800);
  };

  // Confetti celebration trigger
  const triggerCelebration = async () => {
    try {
      const confetti = (await import('canvas-confetti')).default;
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#FCF1D0', '#22396F', '#10b981', '#f59e0b'],
      });
    } catch {
      // Fallback gracefully
    }
  };

  // Initial Load: Starts with 100% CLEAN EMPTY SLOTS so creators can add their own details!
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setSlots(parsed);
          setIsLoaded(true);
          return;
        }
      }
      // Clean, empty 30-slot canvas by default
      const empty = getEmptySlots();
      setSlots(empty);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(empty));
    } catch (e) {
      console.error('Failed to access LocalStorage:', e);
      setSlots(getEmptySlots());
    } finally {
      setIsLoaded(true);
    }
  }, [currentLang]);

  // Persist slots to LocalStorage on change
  const saveSlots = (newSlots: PostItem[]) => {
    setSlots(newSlots);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newSlots));
    } catch (e) {
      console.error('Failed to save to LocalStorage:', e);
    }
  };

  // Status toggle: Idea -> Filmed -> Posted -> Idea
  const toggleStatus = (id: string, e?: React.MouseEvent) => {
    e?.stopPropagation();
    const updated = slots.map((item) => {
      if (item.id === id) {
        let nextStatus: PostItem['status'] = 'idea';
        if (item.status === 'idea') nextStatus = 'filmed';
        else if (item.status === 'filmed') {
          nextStatus = 'posted';
          triggerCelebration();
        } else if (item.status === 'posted') nextStatus = 'idea';

        return { ...item, status: nextStatus, updatedAt: Date.now() };
      }
      return item;
    });
    saveSlots(updated);
  };

  // Move Slot Up/Down
  const moveSlot = (index: number, direction: 'up' | 'down', e?: React.MouseEvent) => {
    e?.stopPropagation();
    const targetIndex = direction === 'up' ? index - 1 : index + 1;
    if (targetIndex < 0 || targetIndex >= slots.length) return;

    const copy = [...slots];
    const temp = copy[index];
    copy[index] = copy[targetIndex];
    copy[targetIndex] = temp;

    const renumbered = copy.map((item, idx) => ({
      ...item,
      day: idx + 1,
      updatedAt: Date.now(),
    }));

    saveSlots(renumbered);
  };

  // 1-Click "Copy Package"
  const copyPackage = async (slot: PostItem, e?: React.MouseEvent) => {
    e?.stopPropagation();
    const hasContent = slot.hook.trim() || slot.caption.trim() || slot.hashtags.trim();
    if (!hasContent) {
      openEditModal(slot);
      showToast(`Day ${slot.day} is empty. Add your details first!`);
      return;
    }

    const formatted = [
      slot.hook.trim(),
      '',
      slot.caption.trim(),
      '',
      slot.hashtags.trim(),
    ]
      .filter((part, idx, arr) => {
        if (part === '') {
          return arr[idx - 1] && arr[idx + 1];
        }
        return true;
      })
      .join('\n');

    try {
      await navigator.clipboard.writeText(formatted);
      setCopiedId(slot.id);
      showToast(`${t('actions.copiedPackage')} (Day ${slot.day})`);
      setTimeout(() => setCopiedId((prev) => (prev === slot.id ? null : prev)), 2500);
    } catch {
      showToast('Could not copy automatically. Please select text manually.');
    }
  };

  // Clear single slot
  const clearSlot = (id: string, e?: React.MouseEvent) => {
    e?.stopPropagation();
    const updated = slots.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          hook: '',
          rawFileName: '',
          caption: '',
          hashtags: '',
          status: 'idea' as const,
          updatedAt: Date.now(),
        };
      }
      return item;
    });
    saveSlots(updated);
    showToast('Slot cleared.');
  };

  // Add a new content slot
  const addNewSlot = () => {
    const nextDay = slots.length + 1;
    const newSlot: PostItem = {
      id: `slot-${nextDay}-${Date.now()}`,
      day: nextDay,
      hook: '',
      rawFileName: '',
      caption: '',
      hashtags: '',
      status: 'idea',
      updatedAt: Date.now(),
    };
    saveSlots([...slots, newSlot]);
    openEditModal(newSlot);
    showToast(`Day ${nextDay} slot added!`);
  };

  // Open Edit Modal
  const openEditModal = (slot: PostItem) => {
    setEditingSlot(slot);
    setEditForm({ ...slot });
  };

  // Save Edit Modal Changes
  const handleSaveEdit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingSlot) return;

    const updated = slots.map((item) => (item.id === editingSlot.id ? { ...editForm, updatedAt: Date.now() } : item));
    saveSlots(updated);
    setEditingSlot(null);
    showToast(`Day ${editForm.day} saved!`);
  };

  // Export JSON backup
  const exportJsonBackup = () => {
    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(slots, null, 2));
    const downloadAnchor = document.createElement('a');
    const dateStr = new Date().toISOString().slice(0, 10);
    downloadAnchor.setAttribute('href', dataStr);
    downloadAnchor.setAttribute('download', `postqueue-backup-${dateStr}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
    showToast('Backup JSON downloaded successfully!');
  };

  // Import JSON backup
  const handleFileImport = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const content = e.target?.result as string;
        const parsed = JSON.parse(content);
        if (!Array.isArray(parsed)) throw new Error('Root is not an array');

        const sanitized: PostItem[] = parsed.map((item, idx) => ({
          id: item.id || `slot-${idx + 1}-${Date.now()}`,
          day: typeof item.day === 'number' ? item.day : idx + 1,
          hook: String(item.hook || ''),
          rawFileName: String(item.rawFileName || ''),
          caption: String(item.caption || ''),
          hashtags: String(item.hashtags || ''),
          status: ['idea', 'filmed', 'posted'].includes(item.status) ? item.status : 'idea',
          updatedAt: item.updatedAt || Date.now(),
        }));

        saveSlots(sanitized);
        showToast(t('modal.importSuccess'));
      } catch (err) {
        alert(t('modal.importError'));
      }
    };
    reader.readAsText(file);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  // Export CSV
  const exportCsv = () => {
    const headers = ['Day', 'Status', 'Hook', 'Raw_File_Name', 'Caption', 'Keywords_Hashtags'];
    const rows = slots.map((s) => [
      s.day,
      s.status,
      `"${s.hook.replace(/"/g, '""')}"`,
      `"${s.rawFileName.replace(/"/g, '""')}"`,
      `"${s.caption.replace(/"/g, '""')}"`,
      `"${s.hashtags.replace(/"/g, '""')}"`,
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map((e) => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `postqueue-content-plan-${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    link.remove();
    showToast('Exported CSV successfully!');
  };

  // Reset all slots to completely empty
  const resetAllSlots = () => {
    if (window.confirm('Clear all slots and start completely fresh?')) {
      const empty = getEmptySlots();
      saveSlots(empty);
      showToast('All slots cleared to blank.');
    }
  };

  // Optional: Load sample starter hooks if user explicitly wants inspiration
  const loadStarterHooks = () => {
    if (window.confirm('Load 30 sample viral hook templates for inspiration?')) {
      const starter = getInitialSlots(currentLang);
      saveSlots(starter);
      showToast('Loaded 30 sample hook ideas!');
    }
  };

  // Counts & Stats
  const stats = useMemo(() => {
    const total = slots.length;
    const ideaCount = slots.filter((s) => s.status === 'idea').length;
    const filmedCount = slots.filter((s) => s.status === 'filmed').length;
    const postedCount = slots.filter((s) => s.status === 'posted').length;
    const filledCount = slots.filter((s) => s.hook.trim() || s.caption.trim()).length;
    const percentDone = total > 0 ? Math.round((postedCount / total) * 100) : 0;
    return { total, ideaCount, filmedCount, postedCount, filledCount, percentDone };
  }, [slots]);

  // Filter & Search
  const filteredSlots = useMemo(() => {
    return slots.filter((slot) => {
      if (statusFilter !== 'all' && slot.status !== statusFilter) return false;

      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchHook = slot.hook.toLowerCase().includes(q);
        const matchFile = slot.rawFileName.toLowerCase().includes(q);
        const matchCaption = slot.caption.toLowerCase().includes(q);
        const matchTags = slot.hashtags.toLowerCase().includes(q);
        const matchDay = `day ${slot.day}`.includes(q) || `${slot.day}` === q;
        return matchHook || matchFile || matchCaption || matchTags || matchDay;
      }
      return true;
    });
  }, [slots, statusFilter, searchQuery]);

  // Status badge styling
  const getStatusBadge = (status: PostItem['status']) => {
    switch (status) {
      case 'idea':
        return {
          label: t('status.idea'),
          emoji: '💡',
          badgeClass: 'bg-amber-500/10 text-amber-600 border-amber-500/30 dark:bg-amber-400/10 dark:text-amber-300 dark:border-amber-400/30',
          btnClass: 'hover:bg-amber-500/20 text-amber-600 dark:text-amber-300',
        };
      case 'filmed':
        return {
          label: t('status.filmed'),
          emoji: '🎬',
          badgeClass: 'bg-[#22396F]/10 text-[#22396F] border-[#22396F]/30 dark:bg-[#22396F]/40 dark:text-[#FCF1D0] dark:border-[#22396F]',
          btnClass: 'hover:bg-[#22396F]/20 text-[#22396F] dark:text-[#FCF1D0]',
        };
      case 'posted':
        return {
          label: t('status.posted'),
          emoji: '✅',
          badgeClass: 'bg-emerald-500/10 text-emerald-600 border-emerald-500/30 dark:bg-emerald-400/10 dark:text-emerald-300 dark:border-emerald-400/30',
          btnClass: 'hover:bg-emerald-500/20 text-emerald-600 dark:text-emerald-300',
        };
    }
  };

  const countHashtags = (str: string) => {
    const matches = str.match(/#\w+/g);
    if (matches) return matches.length;
    if (str.trim().length > 0) {
      return str.split(/[\s,]+/).filter(Boolean).length;
    }
    return 0;
  };

  if (!isLoaded) {
    return (
      <div className="flex min-h-[300px] items-center justify-center">
        <div className="flex items-center gap-2.5 text-[#22396F] dark:text-[#FCF1D0]">
          <div className="h-4 w-4 animate-spin rounded-full border-2 border-[#22396F] border-t-transparent dark:border-[#FCF1D0] dark:border-t-transparent"></div>
          <span className="text-xs font-semibold">Loading planner...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-3 py-4 sm:px-6 sm:py-6 lg:px-8">
      
      {/* Hidden File Input for JSON restore */}
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileImport}
        accept=".json,application/json"
        className="hidden"
      />

      {/* Floating Copied Toast Alert */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-2xl bg-[#010736] px-4 py-2.5 text-xs font-bold text-[#FCF1D0] shadow-2xl ring-1 ring-[#22396F] animate-in fade-in slide-in-from-bottom-3 dark:bg-[#FCF1D0] dark:text-[#010736]">
          <Check className="h-3.5 w-3.5 text-emerald-400 dark:text-emerald-700" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* MINIMAL, SLEEK WORKFLOW HEADER */}
      <div className="mb-6 rounded-2xl border border-[#22396F]/15 bg-white p-4 shadow-xs transition-colors duration-200 sm:p-5 dark:border-[#22396F]/70 dark:bg-[#0D1C42]">
        
        {/* Top Row: Title & Clean Streak Progress */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border-b border-[#22396F]/10 pb-4 dark:border-[#22396F]/40">
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-xl sm:text-2xl font-black text-[#010736] dark:text-[#FCF1D0]">
                30-Day Content Planner
              </h1>
              <span className="rounded-full bg-[#FCF1D0] px-2 py-0.5 text-[10px] font-bold text-[#010736] dark:bg-[#010736] dark:text-[#FCF1D0] dark:border dark:border-[#22396F]">
                100% Private
              </span>
            </div>
            <p className="mt-0.5 text-xs text-[#010736]/70 dark:text-[#FCF1D0]/70">
              Plan hooks, raw files, captions, and tags locally in your browser.
            </p>
          </div>

          {/* Minimalist Progress Pill */}
          <div className="flex items-center gap-3">
            <div className="flex flex-col items-end">
              <span className="text-xs font-bold text-[#010736] dark:text-[#FCF1D0]">
                {stats.postedCount} of {stats.total} Posted ({stats.percentDone}%)
              </span>
              <div className="mt-1 h-2 w-36 sm:w-44 overflow-hidden rounded-full bg-[#22396F]/10 dark:bg-[#010736]">
                <div
                  className="h-full rounded-full bg-emerald-500 transition-all duration-300"
                  style={{ width: `${stats.percentDone}%` }}
                ></div>
              </div>
            </div>

            {/* Quick Filter Badges */}
            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={() => setStatusFilter(statusFilter === 'idea' ? 'all' : 'idea')}
                className={`flex h-7 items-center gap-1 rounded-lg px-2 text-xs font-bold transition ${
                  statusFilter === 'idea' ? 'bg-amber-500 text-white' : 'bg-amber-500/10 text-amber-600 hover:bg-amber-500/20 dark:text-amber-300'
                }`}
                title="Filter Ideas"
              >
                <span>💡</span>
                <span>{stats.ideaCount}</span>
              </button>
              <button
                type="button"
                onClick={() => setStatusFilter(statusFilter === 'filmed' ? 'all' : 'filmed')}
                className={`flex h-7 items-center gap-1 rounded-lg px-2 text-xs font-bold transition ${
                  statusFilter === 'filmed' ? 'bg-[#22396F] text-[#FCF1D0]' : 'bg-[#22396F]/10 text-[#22396F] hover:bg-[#22396F]/20 dark:bg-[#22396F]/40 dark:text-[#FCF1D0]'
                }`}
                title="Filter Filmed"
              >
                <span>🎬</span>
                <span>{stats.filmedCount}</span>
              </button>
              <button
                type="button"
                onClick={() => setStatusFilter(statusFilter === 'posted' ? 'all' : 'posted')}
                className={`flex h-7 items-center gap-1 rounded-lg px-2 text-xs font-bold transition ${
                  statusFilter === 'posted' ? 'bg-emerald-600 text-white' : 'bg-emerald-500/10 text-emerald-600 hover:bg-emerald-500/20 dark:text-emerald-300'
                }`}
                title="Filter Posted"
              >
                <span>✅</span>
                <span>{stats.postedCount}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Row: Simple Minimal Controls Bar */}
        <div className="mt-4 flex flex-wrap items-center justify-between gap-2.5">
          
          {/* Search Box */}
          <div className="relative min-w-[180px] flex-1 max-w-xs">
            <Search className="absolute left-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-[#22396F]/60 dark:text-[#FCF1D0]/60" />
            <input
              id="planner-search-input"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search queue..."
              aria-label="Search content queue"
              className="w-full rounded-xl border border-[#22396F]/20 bg-[#fcfaf5] py-1.5 pl-8 pr-7 text-xs text-[#010736] placeholder-[#22396F]/50 shadow-xs focus:border-[#22396F] focus:outline-none focus:ring-1 focus:ring-[#22396F] dark:border-[#22396F] dark:bg-[#010736] dark:text-[#FCF1D0] dark:placeholder-[#FCF1D0]/40"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                aria-label="Clear search"
                className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
              >
                <X className="h-3 w-3" />
              </button>
            )}
          </div>

          {/* View Toggles (Pipeline / Board / List) */}
          <div className="flex items-center gap-0.5 rounded-xl border border-[#22396F]/20 bg-[#fcfaf5] p-0.5 dark:border-[#22396F] dark:bg-[#010736]">
            <button
              type="button"
              onClick={() => setActiveView('pipeline')}
              className={`flex items-center gap-1 rounded-lg px-2.5 py-1 text-xs font-bold transition ${
                activeView === 'pipeline'
                  ? 'bg-[#22396F] text-[#FCF1D0] shadow-xs'
                  : 'text-[#010736]/70 hover:text-[#010736] dark:text-[#FCF1D0]/70 dark:hover:text-[#FCF1D0]'
              }`}
              title="30-Slot Grid Pipeline"
            >
              <LayoutGrid className="h-3 w-3" />
              <span className="hidden sm:inline">Grid</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveView('board')}
              className={`flex items-center gap-1 rounded-lg px-2.5 py-1 text-xs font-bold transition ${
                activeView === 'board'
                  ? 'bg-[#22396F] text-[#FCF1D0] shadow-xs'
                  : 'text-[#010736]/70 hover:text-[#010736] dark:text-[#FCF1D0]/70 dark:hover:text-[#FCF1D0]'
              }`}
              title="Kanban Board View"
            >
              <Columns className="h-3 w-3" />
              <span className="hidden sm:inline">Board</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveView('list')}
              className={`flex items-center gap-1 rounded-lg px-2.5 py-1 text-xs font-bold transition ${
                activeView === 'list'
                  ? 'bg-[#22396F] text-[#FCF1D0] shadow-xs'
                  : 'text-[#010736]/70 hover:text-[#010736] dark:text-[#FCF1D0]/70 dark:hover:text-[#FCF1D0]'
              }`}
              title="Compact List View"
            >
              <List className="h-3 w-3" />
              <span className="hidden sm:inline">List</span>
            </button>
          </div>

          {/* Quick Actions (Minimal Buttons) */}
          <div className="flex items-center gap-1.5">
            <button
              type="button"
              onClick={exportJsonBackup}
              className="flex items-center gap-1 rounded-xl border border-[#22396F]/20 bg-white px-2.5 py-1 text-xs font-bold text-[#010736] shadow-xs hover:bg-slate-50 dark:border-[#22396F] dark:bg-[#010736] dark:text-[#FCF1D0] dark:hover:bg-[#22396F]/40"
              title="Export JSON backup"
            >
              <Download className="h-3 w-3 text-[#22396F] dark:text-[#FCF1D0]" />
              <span className="hidden sm:inline">Backup</span>
            </button>

            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="flex items-center gap-1 rounded-xl border border-[#22396F]/20 bg-white px-2.5 py-1 text-xs font-bold text-[#010736] shadow-xs hover:bg-slate-50 dark:border-[#22396F] dark:bg-[#010736] dark:text-[#FCF1D0] dark:hover:bg-[#22396F]/40"
              title="Import JSON backup"
            >
              <Upload className="h-3 w-3 text-[#22396F] dark:text-[#FCF1D0]" />
              <span className="hidden sm:inline">Restore</span>
            </button>

            <button
              type="button"
              onClick={exportCsv}
              className="flex items-center gap-1 rounded-xl border border-[#22396F]/20 bg-white px-2.5 py-1 text-xs font-bold text-[#010736] shadow-xs hover:bg-slate-50 dark:border-[#22396F] dark:bg-[#010736] dark:text-[#FCF1D0] dark:hover:bg-[#22396F]/40"
              title="Export CSV"
            >
              <FileSpreadsheet className="h-3 w-3 text-emerald-600 dark:text-emerald-400" />
              <span className="hidden sm:inline">CSV</span>
            </button>

            {/* Optional Samples Loader */}
            <button
              type="button"
              onClick={loadStarterHooks}
              className="flex items-center gap-1 rounded-xl border border-[#22396F]/30 bg-[#FCF1D0]/60 px-2 py-1 text-xs font-bold text-[#010736] hover:bg-[#FCF1D0] dark:border-[#22396F] dark:bg-[#010736] dark:text-[#FCF1D0]"
              title="Load sample viral hook ideas"
            >
              <Sparkles className="h-3 w-3 text-[#22396F] dark:text-[#FCF1D0]" />
              <span className="hidden md:inline">Samples</span>
            </button>

            {/* Clear / Reset button */}
            <button
              type="button"
              onClick={resetAllSlots}
              className="flex h-7 w-7 items-center justify-center rounded-xl border border-[#22396F]/20 bg-white text-slate-400 hover:bg-red-50 hover:text-red-500 dark:border-[#22396F] dark:bg-[#010736] dark:hover:bg-red-950/30"
              title="Reset all slots"
            >
              <RotateCcw className="h-3 w-3" />
            </button>

            {/* + Add Slot */}
            <button
              type="button"
              onClick={addNewSlot}
              className="flex items-center gap-1 rounded-xl bg-[#22396F] px-3 py-1 text-xs font-black text-[#FCF1D0] shadow-xs hover:bg-[#0D1C42] active:scale-95 dark:bg-[#FCF1D0] dark:text-[#010736] dark:hover:bg-white"
            >
              <Plus className="h-3.5 w-3.5" />
              <span>Add</span>
            </button>
          </div>

        </div>

      </div>

      {/* FILTER ACTIVE PILL */}
      {(statusFilter !== 'all' || searchQuery) && (
        <div className="mb-4 flex items-center justify-between rounded-xl bg-[#FCF1D0]/40 border border-[#22396F]/20 px-3 py-1.5 text-xs text-[#010736] dark:bg-[#0D1C42] dark:border-[#22396F] dark:text-[#FCF1D0]">
          <div className="flex items-center gap-2">
            <span>Showing</span>
            <span className="font-black text-[#010736] dark:text-white">{filteredSlots.length}</span>
            <span>of {slots.length} slots</span>
            {statusFilter !== 'all' && (
              <span className="rounded-md bg-white px-1.5 py-0.5 font-bold shadow-xs dark:bg-[#010736] dark:text-[#FCF1D0]">
                {statusFilter.toUpperCase()}
              </span>
            )}
            {searchQuery && (
              <span className="rounded-md bg-white px-1.5 py-0.5 font-bold shadow-xs dark:bg-[#010736] dark:text-[#FCF1D0]">
                "{searchQuery}"
              </span>
            )}
          </div>
          <button
            onClick={() => {
              setStatusFilter('all');
              setSearchQuery('');
            }}
            className="font-bold underline text-[#22396F] hover:text-[#010736] dark:text-[#FCF1D0]"
          >
            Clear filter
          </button>
        </div>
      )}

      {/* VIEW 1: CLEAN MINIMAL PIPELINE GRID */}
      {activeView === 'pipeline' && (
        <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-3">
          {filteredSlots.map((slot, index) => {
            const badge = getStatusBadge(slot.status);
            const isCopied = copiedId === slot.id;
            const hasHook = Boolean(slot.hook.trim());
            const hasFile = Boolean(slot.rawFileName.trim());
            const hasCaption = Boolean(slot.caption.trim());
            const hasTags = Boolean(slot.hashtags.trim());

            return (
              <div
                key={slot.id}
                onClick={() => openEditModal(slot)}
                className={`group relative flex flex-col justify-between rounded-2xl border p-4 shadow-xs transition-all duration-150 cursor-pointer ${
                  hasHook || hasCaption
                    ? 'border-[#22396F]/20 bg-white hover:border-[#22396F] hover:shadow-md dark:border-[#22396F]/70 dark:bg-[#0D1C42]'
                    : 'border-dashed border-[#22396F]/25 bg-[#fcfaf5]/60 hover:border-[#22396F] hover:bg-white dark:border-[#22396F]/40 dark:bg-[#010736]/60 dark:hover:bg-[#0D1C42]'
                }`}
              >
                {/* Top Row: Day + Reorder + Status Toggle */}
                <div>
                  <div className="flex items-center justify-between gap-2 border-b border-[#22396F]/10 pb-2.5 dark:border-[#22396F]/30">
                    <div className="flex items-center gap-1.5">
                      <span className="flex h-6 items-center rounded-lg bg-[#FCF1D0]/70 px-2 text-[11px] font-black text-[#010736] dark:bg-[#010736] dark:text-[#FCF1D0] dark:border dark:border-[#22396F]">
                        Day {slot.day < 10 ? `0${slot.day}` : slot.day}
                      </span>
                      
                      <div className="flex items-center" onClick={(e) => e.stopPropagation()}>
                        <button
                          type="button"
                          onClick={(e) => moveSlot(index, 'up', e)}
                          disabled={index === 0}
                          aria-label={`Move Day ${slot.day} up`}
                          className="rounded p-0.5 text-[#22396F]/50 hover:text-[#010736] disabled:opacity-20 dark:text-[#FCF1D0]/40 dark:hover:text-[#FCF1D0]"
                        >
                          <ArrowUp className="h-3 w-3" />
                        </button>
                        <button
                          type="button"
                          onClick={(e) => moveSlot(index, 'down', e)}
                          disabled={index === slots.length - 1}
                          aria-label={`Move Day ${slot.day} down`}
                          className="rounded p-0.5 text-[#22396F]/50 hover:text-[#010736] disabled:opacity-20 dark:text-[#FCF1D0]/40 dark:hover:text-[#FCF1D0]"
                        >
                          <ArrowDown className="h-3 w-3" />
                        </button>
                      </div>
                    </div>

                    {/* Status Pill Toggle */}
                    <button
                      type="button"
                      onClick={(e) => toggleStatus(slot.id, e)}
                      className={`inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-[11px] font-bold shadow-xs transition active:scale-95 ${badge.badgeClass} ${badge.btnClass}`}
                      title="Click to cycle status: Idea -> Filmed -> Posted"
                    >
                      <span className="leading-none">{badge.emoji}</span>
                      <span>{badge.label}</span>
                    </button>
                  </div>

                  {/* Hook Title Field */}
                  <div className="mt-3">
                    {hasHook ? (
                      <h3 className="text-sm font-bold text-[#010736] line-clamp-2 dark:text-[#FCF1D0]">
                        {slot.hook}
                      </h3>
                    ) : (
                      <div className="flex items-center gap-1.5 py-1 text-xs font-medium text-[#22396F]/60 hover:text-[#22396F] dark:text-[#FCF1D0]/50 dark:hover:text-[#FCF1D0]">
                        <Plus className="h-3 w-3" />
                        <span>Add 3-second hook...</span>
                      </div>
                    )}
                  </div>

                  {/* Raw Filename (clean & optional) */}
                  {hasFile && (
                    <div className="mt-2 flex items-center gap-1.5 rounded-lg bg-[#fcfaf5] px-2 py-1 text-[11px] font-mono text-[#010736] border border-[#22396F]/10 dark:bg-[#010736] dark:text-[#FCF1D0]/90 dark:border-[#22396F]/50 truncate">
                      <Film className="h-3 w-3 shrink-0 text-[#22396F] dark:text-[#FCF1D0]" />
                      <span className="truncate">{slot.rawFileName}</span>
                    </div>
                  )}

                  {/* Caption Preview (only if exists) */}
                  {hasCaption && (
                    <div className="mt-2 text-xs text-[#010736]/75 line-clamp-2 dark:text-[#FCF1D0]/70">
                      {slot.caption}
                    </div>
                  )}

                  {/* Hashtags Preview */}
                  {hasTags && (
                    <div className="mt-2 flex items-center gap-1 text-[11px] text-[#22396F] dark:text-[#FCF1D0]/80 truncate">
                      <Hash className="h-3 w-3 shrink-0 text-[#22396F] dark:text-[#FCF1D0]" />
                      <span className="truncate font-mono">{slot.hashtags}</span>
                    </div>
                  )}
                </div>

                {/* Bottom Actions Row: Minimal & Super Easy */}
                <div
                  className="mt-3.5 flex items-center justify-between gap-1.5 border-t border-[#22396F]/10 pt-2.5 dark:border-[#22396F]/30"
                  onClick={(e) => e.stopPropagation()}
                >
                  <button
                    type="button"
                    onClick={(e) => copyPackage(slot, e)}
                    className={`flex flex-1 items-center justify-center gap-1.5 rounded-xl py-1.5 px-2.5 text-xs font-bold transition shadow-xs active:scale-95 ${
                      isCopied
                        ? 'bg-emerald-600 text-white'
                        : hasHook || hasCaption
                        ? 'bg-[#22396F] text-[#FCF1D0] hover:bg-[#0D1C42] dark:bg-[#22396F] dark:text-[#FCF1D0] dark:hover:bg-[#FCF1D0] dark:hover:text-[#010736]'
                        : 'bg-slate-100 text-slate-500 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-400'
                    }`}
                  >
                    {isCopied ? (
                      <>
                        <Check className="h-3 w-3" />
                        <span>Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-3 w-3" />
                        <span>Copy Post</span>
                      </>
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={() => openEditModal(slot)}
                    aria-label={`Edit Day ${slot.day}`}
                    className="flex h-7 w-7 items-center justify-center rounded-lg border border-[#22396F]/20 text-[#010736] transition hover:bg-[#FCF1D0]/40 dark:border-[#22396F] dark:text-[#FCF1D0] dark:hover:bg-[#010736]"
                    title="Edit slot details"
                  >
                    <Edit2 className="h-3 w-3" />
                  </button>

                  {(hasHook || hasCaption || hasFile) && (
                    <button
                      type="button"
                      onClick={(e) => clearSlot(slot.id, e)}
                      aria-label={`Clear Day ${slot.day}`}
                      className="flex h-7 w-7 items-center justify-center rounded-lg text-slate-400 transition hover:bg-red-50 hover:text-red-500 dark:hover:bg-red-950/30"
                      title="Clear slot"
                    >
                      <Trash2 className="h-3 w-3" />
                    </button>
                  )}
                </div>

              </div>
            );
          })}
        </div>
      )}

      {/* VIEW 2: KANBAN BOARD */}
      {activeView === 'board' && (
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
          
          {/* Column 1: IDEA */}
          <div className="rounded-2xl border border-amber-500/20 bg-amber-500/[0.02] p-4 dark:border-amber-500/20 dark:bg-amber-500/[0.01]">
            <div className="flex items-center justify-between border-b border-amber-500/20 pb-2.5">
              <div className="flex items-center gap-1.5">
                <span>💡</span>
                <h3 className="font-bold text-xs uppercase tracking-wider text-[#010736] dark:text-[#FCF1D0]">Ideas</h3>
              </div>
              <span className="rounded-full bg-amber-500/10 px-2 py-0.5 text-[10px] font-bold text-amber-600 dark:text-amber-300">
                {slots.filter((s) => s.status === 'idea').length}
              </span>
            </div>

            <div className="mt-3 flex flex-col gap-2">
              {slots
                .filter((s) => s.status === 'idea')
                .map((slot) => (
                  <div
                    key={slot.id}
                    onClick={() => openEditModal(slot)}
                    className="group rounded-xl border border-[#22396F]/15 bg-white p-3 shadow-xs transition hover:border-[#22396F] cursor-pointer dark:border-[#22396F] dark:bg-[#0D1C42]"
                  >
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-[#010736] dark:text-[#FCF1D0]">
                        Day {slot.day}
                      </span>
                      <button
                        type="button"
                        onClick={(e) => toggleStatus(slot.id, e)}
                        className="rounded bg-[#22396F]/10 px-1.5 py-0.5 text-[10px] font-bold text-[#22396F] dark:bg-[#22396F]/40 dark:text-[#FCF1D0]"
                      >
                        🎬 Filmed
                      </button>
                    </div>

                    <h4 className="mt-1.5 text-xs font-bold text-[#010736] line-clamp-2 dark:text-[#FCF1D0]">
                      {slot.hook || <span className="font-normal italic text-slate-400">Empty hook...</span>}
                    </h4>

                    <div className="mt-2 flex items-center justify-between border-t border-[#22396F]/10 pt-1.5 text-[11px] dark:border-[#22396F]/30">
                      <span className="text-[10px] text-slate-400">{slot.caption.length} chars</span>
                      <button
                        type="button"
                        onClick={(e) => copyPackage(slot, e)}
                        className="font-bold text-[#22396F] hover:underline dark:text-[#FCF1D0]"
                      >
                        Copy
                      </button>
                    </div>
                  </div>
                ))}
            </div>
          </div>

          {/* Column 2: FILMED */}
          <div className="rounded-2xl border border-[#22396F]/20 bg-[#22396F]/[0.02] p-4 dark:border-[#22396F]/40 dark:bg-[#22396F]/[0.03]">
            <div className="flex items-center justify-between border-b border-[#22396F]/20 pb-2.5">
              <div className="flex items-center gap-1.5">
                <span>🎬</span>
                <h3 className="font-bold text-xs uppercase tracking-wider text-[#010736] dark:text-[#FCF1D0]">Filmed</h3>
              </div>
              <span className="rounded-full bg-[#22396F]/10 px-2 py-0.5 text-[10px] font-bold text-[#22396F] dark:bg-[#22396F]/40 dark:text-[#FCF1D0]">
                {slots.filter((s) => s.status === 'filmed').length}
              </span>
            </div>

            <div className="mt-3 flex flex-col gap-2">
              {slots
                .filter((s) => s.status === 'filmed')
                .map((slot) => (
                  <div
                    key={slot.id}
                    onClick={() => openEditModal(slot)}
                    className="group rounded-xl border border-[#22396F]/15 bg-white p-3 shadow-xs transition hover:border-[#22396F] cursor-pointer dark:border-[#22396F] dark:bg-[#0D1C42]"
                  >
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-[#010736] dark:text-[#FCF1D0]">
                        Day {slot.day}
                      </span>
                      <button
                        type="button"
                        onClick={(e) => toggleStatus(slot.id, e)}
                        className="rounded bg-emerald-500/10 px-1.5 py-0.5 text-[10px] font-bold text-emerald-600 dark:text-emerald-300"
                      >
                        ✅ Posted
                      </button>
                    </div>

                    <h4 className="mt-1.5 text-xs font-bold text-[#010736] line-clamp-2 dark:text-[#FCF1D0]">
                      {slot.hook || <span className="font-normal italic text-slate-400">Empty hook...</span>}
                    </h4>

                    <div className="mt-2 flex items-center justify-between border-t border-[#22396F]/10 pt-1.5 text-[11px] dark:border-[#22396F]/30">
                      <span className="text-[10px] text-slate-400">{slot.caption.length} chars</span>
                      <button
                        type="button"
                        onClick={(e) => copyPackage(slot, e)}
                        className="font-bold text-[#22396F] hover:underline dark:text-[#FCF1D0]"
                      >
                        Copy
                      </button>
                    </div>
                  </div>
                ))}
            </div>
          </div>

          {/* Column 3: POSTED */}
          <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/[0.02] p-4 dark:border-emerald-500/20 dark:bg-emerald-500/[0.01]">
            <div className="flex items-center justify-between border-b border-emerald-500/20 pb-2.5">
              <div className="flex items-center gap-1.5">
                <span>✅</span>
                <h3 className="font-bold text-xs uppercase tracking-wider text-[#010736] dark:text-[#FCF1D0]">Posted</h3>
              </div>
              <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-bold text-emerald-600 dark:text-emerald-300">
                {slots.filter((s) => s.status === 'posted').length}
              </span>
            </div>

            <div className="mt-3 flex flex-col gap-2">
              {slots
                .filter((s) => s.status === 'posted')
                .map((slot) => (
                  <div
                    key={slot.id}
                    onClick={() => openEditModal(slot)}
                    className="group rounded-xl border border-[#22396F]/15 bg-white p-3 shadow-xs transition hover:border-emerald-500/40 cursor-pointer dark:border-[#22396F] dark:bg-[#0D1C42]"
                  >
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-[#010736] dark:text-[#FCF1D0]">
                        Day {slot.day}
                      </span>
                      <span className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400">
                        Done
                      </span>
                    </div>

                    <h4 className="mt-1.5 text-xs font-bold text-[#010736] line-clamp-2 dark:text-[#FCF1D0]">
                      {slot.hook || <span className="font-normal italic text-slate-400">Empty hook...</span>}
                    </h4>

                    <div className="mt-2 flex items-center justify-between border-t border-[#22396F]/10 pt-1.5 text-[11px] dark:border-[#22396F]/30">
                      <span className="text-[10px] text-slate-400">{slot.caption.length} chars</span>
                      <button
                        type="button"
                        onClick={(e) => copyPackage(slot, e)}
                        className="font-bold text-emerald-600 hover:underline dark:text-emerald-400"
                      >
                        Re-copy
                      </button>
                    </div>
                  </div>
                ))}
            </div>
          </div>

        </div>
      )}

      {/* VIEW 3: COMPACT LIST VIEW */}
      {activeView === 'list' && (
        <div className="overflow-hidden rounded-2xl border border-[#22396F]/20 bg-white shadow-xs dark:border-[#22396F] dark:bg-[#0D1C42]">
          <div className="divide-y divide-[#22396F]/10 dark:divide-[#22396F]/30">
            {filteredSlots.map((slot) => {
              const badge = getStatusBadge(slot.status);
              return (
                <div
                  key={slot.id}
                  onClick={() => openEditModal(slot)}
                  className="flex items-center justify-between gap-3 p-3 transition hover:bg-[#FCF1D0]/20 cursor-pointer dark:hover:bg-[#010736]/40"
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <span className="flex h-6 w-11 shrink-0 items-center justify-center rounded-lg bg-[#FCF1D0]/70 text-[11px] font-black text-[#010736] dark:bg-[#010736] dark:text-[#FCF1D0] dark:border dark:border-[#22396F]">
                      D{slot.day}
                    </span>

                    <button
                      type="button"
                      onClick={(e) => toggleStatus(slot.id, e)}
                      className={`inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-[10px] font-bold shrink-0 ${badge.badgeClass}`}
                    >
                      <span>{badge.emoji}</span>
                      <span>{badge.label}</span>
                    </button>

                    <p className="text-xs font-bold text-[#010736] truncate dark:text-[#FCF1D0]">
                      {slot.hook || <span className="italic text-slate-400 font-normal">Empty Hook</span>}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 shrink-0" onClick={(e) => e.stopPropagation()}>
                    <button
                      type="button"
                      onClick={(e) => copyPackage(slot, e)}
                      className="flex items-center gap-1 rounded-lg bg-[#22396F] px-2.5 py-1 text-[11px] font-bold text-[#FCF1D0] hover:bg-[#0D1C42] dark:bg-[#22396F] dark:text-[#FCF1D0]"
                    >
                      <Copy className="h-3 w-3" />
                      <span>Copy</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => openEditModal(slot)}
                      aria-label="Edit slot"
                      className="rounded-lg p-1 text-[#22396F] hover:bg-[#FCF1D0]/40 dark:text-[#FCF1D0]"
                    >
                      <Edit2 className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* FAST ACCESSIBLE EDIT MODAL */}
      {editingSlot && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-[#010736]/75 backdrop-blur-xs transition-opacity"
            onClick={() => setEditingSlot(null)}
          ></div>

          {/* Modal Container */}
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            className="relative w-full max-w-xl rounded-3xl border border-[#22396F]/30 bg-white p-5 shadow-2xl transition-all sm:p-6 dark:border-[#22396F] dark:bg-[#0D1C42] my-auto"
          >
            
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-[#22396F]/10 pb-3 dark:border-[#22396F]/40">
              <div className="flex items-center gap-2">
                <span className="flex h-7 items-center rounded-xl bg-[#FCF1D0] px-2.5 text-xs font-black text-[#010736] dark:bg-[#010736] dark:text-[#FCF1D0] dark:border dark:border-[#22396F]">
                  Day {editForm.day}
                </span>
                <h3 id="modal-title" className="text-sm font-bold text-[#010736] dark:text-[#FCF1D0]">
                  Edit Content Slot
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setEditingSlot(null)}
                aria-label="Close edit modal"
                className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-700 dark:hover:bg-[#010736] dark:hover:text-[#FCF1D0]"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSaveEdit} className="mt-4 space-y-3.5">
              
              {/* Production Status Selector */}
              <div>
                <span className="block text-[11px] font-bold uppercase tracking-wider text-[#22396F] dark:text-[#FCF1D0]/70">
                  Status
                </span>
                <div className="mt-1.5 grid grid-cols-3 gap-2">
                  {(['idea', 'filmed', 'posted'] as const).map((st) => {
                    const badge = getStatusBadge(st);
                    const isSelected = editForm.status === st;
                    return (
                      <button
                        type="button"
                        key={st}
                        onClick={() => setEditForm({ ...editForm, status: st })}
                        className={`flex items-center justify-center gap-1.5 rounded-xl border py-1.5 text-xs font-bold transition ${
                          isSelected
                            ? `${badge.badgeClass} ring-2 ring-[#22396F] dark:ring-[#FCF1D0] shadow-xs`
                            : 'border-[#22396F]/20 bg-[#fcfaf5] text-[#010736] hover:bg-slate-100 dark:border-[#22396F]/50 dark:bg-[#010736] dark:text-[#FCF1D0]'
                        }`}
                      >
                        <span>{badge.emoji}</span>
                        <span>{badge.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 3-Second Hook (Title) */}
              <div>
                <label htmlFor="slot-hook-title" className="block text-[11px] font-bold uppercase tracking-wider text-[#010736] dark:text-[#FCF1D0]">
                  3-Second Hook (Title)
                </label>
                <input
                  id="slot-hook-title"
                  type="text"
                  autoFocus
                  value={editForm.hook}
                  onChange={(e) => setEditForm({ ...editForm, hook: e.target.value })}
                  placeholder="e.g. Stop making this mistake with your content..."
                  className="mt-1 w-full rounded-xl border border-[#22396F]/20 bg-[#fcfaf5] px-3 py-2 text-xs text-[#010736] shadow-xs focus:border-[#22396F] focus:outline-none focus:ring-1 focus:ring-[#22396F] dark:border-[#22396F] dark:bg-[#010736] dark:text-[#FCF1D0]"
                />
              </div>

              {/* Raw Video File Name */}
              <div>
                <label htmlFor="slot-raw-filename" className="block text-[11px] font-bold uppercase tracking-wider text-[#010736] dark:text-[#FCF1D0]">
                  Raw Video File Name
                </label>
                <div className="relative mt-1">
                  <Film className="absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-[#22396F] dark:text-[#FCF1D0]" />
                  <input
                    id="slot-raw-filename"
                    type="text"
                    value={editForm.rawFileName}
                    onChange={(e) => setEditForm({ ...editForm, rawFileName: e.target.value })}
                    placeholder="e.g. VID_2026_Day01.mp4 or CameraRoll_Take2.mov"
                    className="w-full rounded-xl border border-[#22396F]/20 bg-[#fcfaf5] py-2 pl-8 pr-3 text-xs font-mono text-[#010736] shadow-xs focus:border-[#22396F] focus:outline-none focus:ring-1 focus:ring-[#22396F] dark:border-[#22396F] dark:bg-[#010736] dark:text-[#FCF1D0]"
                  />
                </div>
              </div>

              {/* Caption with Live Character Countdown */}
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="slot-caption-text" className="block text-[11px] font-bold uppercase tracking-wider text-[#010736] dark:text-[#FCF1D0]">
                    Caption
                  </label>
                  <span
                    className={`text-[11px] font-bold ${
                      MAX_CAPTION_CHARS - editForm.caption.length < 0
                        ? 'text-red-500 font-black'
                        : MAX_CAPTION_CHARS - editForm.caption.length < 200
                        ? 'text-amber-500'
                        : 'text-[#22396F] dark:text-[#FCF1D0]/70'
                    }`}
                  >
                    {MAX_CAPTION_CHARS - editForm.caption.length} chars left
                  </span>
                </div>
                <textarea
                  id="slot-caption-text"
                  rows={3}
                  value={editForm.caption}
                  onChange={(e) => setEditForm({ ...editForm, caption: e.target.value })}
                  placeholder="Write your engaging caption here..."
                  className="mt-1 w-full rounded-xl border border-[#22396F]/20 bg-[#fcfaf5] p-2.5 text-xs leading-relaxed text-[#010736] shadow-xs focus:border-[#22396F] focus:outline-none focus:ring-1 focus:ring-[#22396F] dark:border-[#22396F] dark:bg-[#010736] dark:text-[#FCF1D0]"
                ></textarea>
              </div>

              {/* Keywords / Hashtags */}
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="slot-hashtags-input" className="block text-[11px] font-bold uppercase tracking-wider text-[#010736] dark:text-[#FCF1D0]">
                    Keywords / Hashtags
                  </label>
                  <span className="text-[11px] font-bold text-[#22396F] dark:text-[#FCF1D0]">
                    {countHashtags(editForm.hashtags)} tags
                  </span>
                </div>
                <div className="relative mt-1">
                  <Hash className="absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-[#22396F] dark:text-[#FCF1D0]" />
                  <input
                    id="slot-hashtags-input"
                    type="text"
                    value={editForm.hashtags}
                    onChange={(e) => setEditForm({ ...editForm, hashtags: e.target.value })}
                    placeholder="#creator #videotips #growthhacks"
                    className="w-full rounded-xl border border-[#22396F]/20 bg-[#fcfaf5] py-2 pl-8 pr-3 text-xs text-[#010736] shadow-xs focus:border-[#22396F] focus:outline-none focus:ring-1 focus:ring-[#22396F] dark:border-[#22396F] dark:bg-[#010736] dark:text-[#FCF1D0]"
                  />
                </div>
              </div>

              {/* Modal Actions */}
              <div className="flex items-center justify-end gap-2 border-t border-[#22396F]/10 pt-3 dark:border-[#22396F]/30">
                <button
                  type="button"
                  onClick={() => setEditingSlot(null)}
                  className="rounded-xl px-3.5 py-1.5 text-xs font-bold text-[#22396F] hover:bg-slate-100 dark:text-[#FCF1D0]/70 dark:hover:bg-[#010736]"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="rounded-xl bg-[#22396F] px-4 py-1.5 text-xs font-black text-[#FCF1D0] shadow-sm hover:bg-[#0D1C42] active:scale-95 dark:bg-[#FCF1D0] dark:text-[#010736] dark:hover:bg-white"
                >
                  Save Post
                </button>
              </div>

            </form>

          </div>
        </div>
      )}

    </div>
  );
}
