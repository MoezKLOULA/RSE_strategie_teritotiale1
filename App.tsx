import React, { useState } from 'react';
import NetworkGraph from './components/NetworkGraph';
import DataTable from './components/DataTable';
import NarrativeSection from './components/NarrativeSection';
import RegionalAnalysis from './components/RegionalAnalysis';
import { LayoutDashboard, Network, Table, BookOpen, Menu, X } from 'lucide-react';

enum Tab {
  DASHBOARD = 'Narratif & Stratégie',
  NETWORK = 'Schéma d\'Interaction',
  DATA = 'Cartographie Complète',
}

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>(Tab.DASHBOARD);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const renderContent = () => {
    switch (activeTab) {
      case Tab.DASHBOARD:
        return (
          <div className="space-y-8 animate-in fade-in duration-500">
             <NarrativeSection />
             <h2 className="text-xl font-bold text-slate-800 mt-8 mb-4">Analyse des Opportunités par Zone</h2>
             <RegionalAnalysis />
          </div>
        );
      case Tab.NETWORK:
        return (
           <div className="animate-in fade-in duration-500">
             <div className="mb-6 print:hidden">
               <h2 className="text-xl font-bold text-slate-800">Visualisation des Interactions RSE</h2>
               <p className="text-slate-500">Les 3 axes stratégiques sont au centre. Les acteurs orbitent autour selon leurs contributions.</p>
             </div>
             <NetworkGraph />
           </div>
        );
      case Tab.DATA:
        return (
           <div className="animate-in fade-in duration-500">
             <DataTable />
           </div>
        );
      default:
        return null;
    }
  };

  const navItems = [
    { id: Tab.DASHBOARD, icon: <BookOpen className="w-4 h-4" /> },
    { id: Tab.NETWORK, icon: <Network className="w-4 h-4" /> },
    { id: Tab.DATA, icon: <Table className="w-4 h-4" /> },
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans print:bg-white">
      {/* Header - Hidden in Print */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50 print:hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-tr from-indigo-600 to-blue-500 p-2 rounded-lg">
                <LayoutDashboard className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-slate-900 leading-none">RSE Stratégie</h1>
                <p className="text-xs text-slate-500 font-medium mt-1">Mobilisation Territoriale & Digitale</p>
              </div>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex space-x-1 items-center">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    activeTab === item.id
                      ? 'bg-slate-900 text-white shadow-md'
                      : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                  }`}
                >
                  {item.icon}
                  {item.id}
                </button>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <div className="flex items-center md:hidden">
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-md text-slate-400 hover:text-slate-500 hover:bg-slate-100"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-slate-200 bg-white">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
               {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveTab(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`w-full flex items-center gap-2 px-3 py-3 rounded-md text-base font-medium ${
                     activeTab === item.id
                      ? 'bg-slate-100 text-slate-900'
                      : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                  }`}
                >
                  {item.icon}
                  {item.id}
                </button>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full print:p-0 print:max-w-none">
        {renderContent()}
      </main>

      {/* Footer - Hidden in Print */}
      <footer className="bg-white border-t border-slate-200 mt-auto print:hidden">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs text-slate-400">
            Rapport Stratégique: Mobilisation RSE pour la Digitalisation et l'Impact Territorial. Basé sur l'analyse experte fournie.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;