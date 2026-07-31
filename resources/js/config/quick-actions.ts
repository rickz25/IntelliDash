// quick-actions.ts

import {
    ShieldAlert,
    TrendingUp,
    Package,
    BarChart3,
    RefreshCw,
    DollarSign,
} from 'lucide-react';

export const colorClasses = {
    cyan: 'bg-cyan-500/10 hover:bg-cyan-500/20',
    indigo: 'bg-indigo-500/10 hover:bg-indigo-500/20',
    yellow: 'bg-yellow-500/10 hover:bg-yellow-500/20',
    green: 'bg-green-500/10 hover:bg-green-500/20',
    violet: 'bg-violet-500/10 hover:bg-violet-500/20',
    orange: 'bg-orange-500/10 hover:bg-orange-500/20',
};

export const QUICK_ACTIONS = [
    {
        key: 'forecast',
        label: 'Run AI Forecast',
        loadingLabel: 'Running Forecast...',
        icon: TrendingUp,
        color: 'cyan',
        endpoint: '/api/forecast',
    },
    {
        key: 'fraud',
        label: 'Detect Fraud',
        loadingLabel: 'Detecting Fraud...',
        icon: ShieldAlert,
        color: 'indigo',
        endpoint: '/api/fraud',
    },
    {
        key: 'inventory',
        label: 'Optimize Inventory',
        loadingLabel: 'Optimizing Inventory...',
        icon: Package,
        color: 'yellow',
        endpoint: '/api/inventory',
    },
    {
        key: 'profit',
        label: 'Analyze Profitability',
        loadingLabel: 'Analyzing Profitability...',
        icon: DollarSign,
        color: 'green',
        endpoint: '/api/profit-analysis',
    },
    {
        key: 'kpi',
        label: 'Generate KPI Report',
        loadingLabel: 'Generating KPI Report...',
        icon: BarChart3,
        color: 'violet',
        endpoint: '/api/kpi-report',
    },
    {
        key: 'sync',
        label: 'Sync Data',
        loadingLabel: 'Syncing Data...',
        icon: RefreshCw,
        color: 'orange',
        endpoint: '/api/sync',
    },
];
