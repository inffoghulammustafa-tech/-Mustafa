
import React, { useState, useEffect } from 'react';

interface Post {
  id: string;
  title: string;
  category: string;
  image: string;
  content: string;
  date: string;
}

const AdminPanel: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeTab, setActiveTab] = useState<'overview' | 'add' | 'manage'>('overview');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [posts, setPosts] = useState<Post[]>([]);
  
  // Form State
  const [formData, setFormData] = useState({
    title: '',
    category: 'Free Istikhara',
    image: '',
    content: ''
  });
  const [editingId, setEditingId] = useState<string | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem('rohani_posts');
    if (saved) setPosts(JSON.parse(saved));
  }, []);

  const savePosts = (newPosts: Post[]) => {
    setPosts(newPosts);
    localStorage.setItem('rohani_posts', JSON.stringify(newPosts));
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Strictly enforcing Mustafa / Mustafame with trim for reliability
    const cleanUser = username.trim();
    const cleanPass = password.trim();

    if (cleanUser === 'Mustafa' && cleanPass === 'Mustafame') {
      setIsLoggedIn(true);
    } else {
      alert('Ghalat Maalomat! Baraye meherbani sahi Admin Name (Mustafa) aur Code (Mustafame) darj karein.');
    }
  };

  const handleAddPost = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingId) {
      const updated = posts.map(p => p.id === editingId ? { ...p, ...formData } : p);
      savePosts(updated);
      setEditingId(null);
    } else {
      const newPost: Post = {
        id: Date.now().toString(),
        ...formData,
        date: new Date().toLocaleDateString()
      };
      savePosts([newPost, ...posts]);
    }
    setFormData({ title: '', category: 'Free Istikhara', image: '', content: '' });
    setActiveTab('manage');
  };

  const deletePost = (id: string) => {
    if (window.confirm('Are you sure you want to delete this post?')) {
      savePosts(posts.filter(p => p.id !== id));
    }
  };

  const editPost = (post: Post) => {
    setFormData({
      title: post.title,
      category: post.category,
      image: post.image,
      content: post.content
    });
    setEditingId(post.id);
    setActiveTab('add');
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-[#fffcf0] rounded-[3rem] shadow-2xl overflow-hidden border-4 border-emerald-800">
          <div className="bg-emerald-900 p-10 text-center relative">
             <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/black-linen.png')]"></div>
            <div className="w-20 h-20 bg-yellow-400 rounded-3xl mx-auto flex items-center justify-center text-emerald-950 text-4xl mb-6 shadow-xl relative z-10 animate-soft-pulse">
              <i className="fa-solid fa-shield-halved"></i>
            </div>
            <h2 className="text-3xl font-black text-white relative z-10 tracking-tight">Admin Portal</h2>
            <p className="text-emerald-200 text-sm mt-2 font-medium tracking-widest uppercase opacity-70 relative z-10">Restricted Access</p>
          </div>
          <form onSubmit={handleLogin} className="p-10 space-y-8">
            <div>
              <label className="block text-xs font-black text-emerald-900 uppercase tracking-widest mb-3">Admin Name</label>
              <input 
                type="text" 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-6 py-4 bg-emerald-50/50 border-2 border-emerald-100 rounded-2xl focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 outline-none transition-all font-bold text-emerald-900"
                placeholder="Mustafa"
              />
            </div>
            <div>
              <label className="block text-xs font-black text-emerald-900 uppercase tracking-widest mb-3">Admin Code</label>
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-6 py-4 bg-emerald-50/50 border-2 border-emerald-100 rounded-2xl focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 outline-none transition-all font-bold text-emerald-900"
                placeholder="••••••••"
              />
            </div>
            <button type="submit" className="w-full py-5 bg-emerald-800 hover:bg-emerald-700 text-white font-black rounded-2xl shadow-[0_15px_30px_rgba(6,78,59,0.3)] transition-all active:scale-95 text-xl">
              Unlock Dashboard
            </button>
            <button type="button" onClick={onBack} className="w-full py-2 text-slate-400 text-sm hover:text-emerald-800 font-bold transition-colors">
              <i className="fa-solid fa-arrow-left mr-2"></i> Back to Website
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-100 flex">
      {/* Sidebar */}
      <aside className="w-72 bg-emerald-950 text-emerald-100 hidden md:flex flex-col border-r border-emerald-900/50 shadow-2xl">
        <div className="p-8 border-b border-emerald-900/50 flex items-center gap-4">
          <div className="w-10 h-10 bg-yellow-400 rounded-xl flex items-center justify-center text-emerald-950 shadow-lg">
            <i className="fa-solid fa-star-and-crescent text-xl"></i>
          </div>
          <span className="font-black text-white tracking-tighter text-xl">ROHANI ADMIN</span>
        </div>
        <nav className="flex-1 p-6 space-y-3">
          <button 
            onClick={() => setActiveTab('overview')}
            className={`w-full flex items-center gap-4 px-6 py-4 rounded-2xl transition-all ${activeTab === 'overview' ? 'bg-emerald-700 text-white shadow-xl translate-x-2' : 'hover:bg-emerald-900/50'}`}
          >
            <i className="fa-solid fa-chart-line w-6 text-center text-lg"></i>
            <span className="font-bold">Dashboard</span>
          </button>
          <button 
            onClick={() => { setActiveTab('add'); setEditingId(null); setFormData({ title: '', category: 'Free Istikhara', image: '', content: '' }); }}
            className={`w-full flex items-center gap-4 px-6 py-4 rounded-2xl transition-all ${activeTab === 'add' ? 'bg-emerald-700 text-white shadow-xl translate-x-2' : 'hover:bg-emerald-900/50'}`}
          >
            <i className="fa-solid fa-pen-nib w-6 text-center text-lg"></i>
            <span className="font-bold">Add Blog</span>
          </button>
          <button 
            onClick={() => setActiveTab('manage')}
            className={`w-full flex items-center gap-4 px-6 py-4 rounded-2xl transition-all ${activeTab === 'manage' ? 'bg-emerald-700 text-white shadow-xl translate-x-2' : 'hover:bg-emerald-900/50'}`}
          >
            <i className="fa-solid fa-layer-group w-6 text-center text-lg"></i>
            <span className="font-bold">Manage Library</span>
          </button>
        </nav>
        <div className="p-6 border-t border-emerald-900/50">
          <button onClick={onBack} className="w-full flex items-center gap-4 px-6 py-4 text-red-400 hover:bg-red-500/10 rounded-2xl transition-all font-bold">
            <i className="fa-solid fa-power-off w-6 text-center text-lg"></i>
            <span>Log Out</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        {/* Header */}
        <header className="bg-white/80 backdrop-blur-md border-b border-slate-200 h-24 flex items-center justify-between px-10 sticky top-0 z-20">
          <div>
            <h2 className="text-2xl font-black text-slate-900 capitalize tracking-tight">
              {activeTab === 'overview' ? 'Command Center' : activeTab === 'add' ? (editingId ? 'Edit Article' : 'Compose Article') : 'Content Manager'}
            </h2>
            <p className="text-xs font-bold text-emerald-600 uppercase tracking-widest mt-1">Logged in as Mustafa</p>
          </div>
          <div className="flex items-center gap-6">
            <div className="w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center text-emerald-700 shadow-inner">
              <i className="fa-solid fa-bell"></i>
            </div>
            <div className="w-14 h-14 bg-slate-900 rounded-3xl flex items-center justify-center text-white shadow-xl group cursor-pointer overflow-hidden border-2 border-white">
              <img src="https://rohanilaj.com/wp-content/uploads/2025/01/Rohani-Ilaj-Logo-Design.png" className="w-full h-full object-contain p-2" alt="Mustafa" />
            </div>
          </div>
        </header>

        <div className="p-10 max-w-7xl mx-auto">
          {activeTab === 'overview' && (
            <div className="space-y-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  { icon: 'newspaper', label: 'Published', val: posts.length, color: 'blue' },
                  { icon: 'heart-pulse', label: 'Visibility', val: 'Active', color: 'emerald' },
                  { icon: 'users', label: 'Audience', val: '1.2k', color: 'purple' },
                  { icon: 'calendar-check', label: 'Uptime', val: '99.9%', color: 'amber' }
                ].map((stat, i) => (
                  <div key={i} className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-200/50 flex flex-col items-center text-center group hover:border-emerald-300 transition-all">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-sm transition-transform group-hover:scale-110
                      ${stat.color === 'blue' ? 'bg-blue-50 text-blue-600' : ''}
                      ${stat.color === 'emerald' ? 'bg-emerald-50 text-emerald-600' : ''}
                      ${stat.color === 'purple' ? 'bg-purple-50 text-purple-600' : ''}
                      ${stat.color === 'amber' ? 'bg-amber-50 text-amber-600' : ''}
                    `}>
                      <i className={`fa-solid fa-${stat.icon} text-2xl`}></i>
                    </div>
                    <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest mb-1">{stat.label}</p>
                    <h3 className="text-4xl font-black text-slate-900">{stat.val}</h3>
                  </div>
                ))}
              </div>
              
              <div className="bg-white rounded-[2.5rem] p-10 border border-slate-200/50 shadow-sm relative overflow-hidden">
                <div className="flex justify-between items-center mb-10">
                  <h4 className="text-xl font-black text-slate-900 tracking-tight">Recent Editorial Activity</h4>
                  <button onClick={() => setActiveTab('manage')} className="text-emerald-700 font-black text-xs uppercase tracking-widest hover:underline">View All</button>
                </div>
                {posts.length === 0 ? (
                  <div className="py-20 text-center text-slate-300">
                    <i className="fa-solid fa-scroll text-6xl mb-6 opacity-20"></i>
                    <p className="font-bold italic">The library is currently empty. Add your first insight.</p>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {posts.slice(0, 4).map(post => (
                      <div key={post.id} className="flex items-center gap-6 p-6 bg-slate-50 rounded-3xl group hover:bg-emerald-50 transition-all cursor-pointer border border-transparent hover:border-emerald-100">
                        <img src={post.image || 'https://images.unsplash.com/photo-1519834125748-958a846c483c'} className="w-20 h-20 rounded-2xl object-cover shadow-md group-hover:scale-105 transition-transform" />
                        <div className="flex-1">
                          <p className="text-xs font-black text-emerald-600 uppercase tracking-widest mb-1">{post.category}</p>
                          <p className="font-bold text-slate-900 line-clamp-1 text-lg mb-2">{post.title}</p>
                          <div className="flex gap-4">
                            <button onClick={() => editPost(post)} className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-emerald-700 transition-colors">Edit</button>
                            <button onClick={() => deletePost(post.id)} className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-red-600 transition-colors">Delete</button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}

          {activeTab === 'add' && (
            <div className="max-w-4xl mx-auto">
              <form onSubmit={handleAddPost} className="bg-white rounded-[3rem] shadow-xl border border-slate-200/50 p-10 md:p-16 space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="col-span-2">
                    <label className="block text-xs font-black text-slate-500 uppercase tracking-widest mb-3">Article Title</label>
                    <input 
                      required
                      value={formData.title}
                      onChange={e => setFormData({ ...formData, title: e.target.value })}
                      className="w-full px-6 py-4 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 outline-none transition-all font-bold"
                      placeholder="Enter a powerful title..."
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-black text-slate-500 uppercase tracking-widest mb-3">Spiritual Category</label>
                    <select 
                      value={formData.category}
                      onChange={e => setFormData({ ...formData, category: e.target.value })}
                      className="w-full px-6 py-4 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 outline-none transition-all font-bold appearance-none"
                    >
                      <option>Free Istikhara</option>
                      <option>Love Marriage</option>
                      <option>Black Magic</option>
                      <option>Family Problems</option>
                      <option>Health</option>
                      <option>Dolat</option>
                      <option>Wazifa</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-black text-slate-500 uppercase tracking-widest mb-3">Cover Image URL</label>
                    <input 
                      value={formData.image}
                      onChange={e => setFormData({ ...formData, image: e.target.value })}
                      className="w-full px-6 py-4 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 outline-none transition-all font-bold"
                      placeholder="https://images.unsplash.com/..."
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-black text-slate-500 uppercase tracking-widest mb-3">Rohani Content (Urdu Support)</label>
                  <textarea 
                    required
                    value={formData.content}
                    onChange={e => setFormData({ ...formData, content: e.target.value })}
                    rows={12}
                    className="w-full px-8 py-8 bg-slate-50 border-2 border-slate-100 rounded-[2rem] focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 outline-none transition-all font-arabic text-2xl leading-relaxed text-right"
                    dir="rtl"
                    placeholder="یہاں بلاگ کا مواد لکھیں..."
                  />
                </div>
                <div className="flex gap-6 pt-6">
                  <button type="submit" className="flex-1 py-5 bg-emerald-800 hover:bg-emerald-700 text-white font-black rounded-2xl shadow-xl transition-all transform hover:-translate-y-1 text-lg">
                    {editingId ? 'Update & Save' : 'Publish Article'}
                  </button>
                  <button type="button" onClick={() => setActiveTab('manage')} className="px-10 py-5 bg-slate-100 hover:bg-slate-200 text-slate-500 font-bold rounded-2xl transition-all">
                    Discard
                  </button>
                </div>
              </form>
            </div>
          )}

          {activeTab === 'manage' && (
            <div className="bg-white rounded-[2.5rem] shadow-sm border border-slate-200/50 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead className="bg-slate-50/50 border-b border-slate-100">
                    <tr>
                      <th className="px-10 py-6 text-[10px] font-black text-slate-400 uppercase tracking-widest">Asset</th>
                      <th className="px-10 py-6 text-[10px] font-black text-slate-400 uppercase tracking-widest">Title</th>
                      <th className="px-10 py-6 text-[10px] font-black text-slate-400 uppercase tracking-widest">Section</th>
                      <th className="px-10 py-6 text-[10px] font-black text-slate-400 uppercase tracking-widest">Date</th>
                      <th className="px-10 py-6 text-[10px] font-black text-slate-400 uppercase tracking-widest text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {posts.map(post => (
                      <tr key={post.id} className="hover:bg-emerald-50/30 transition-colors">
                        <td className="px-10 py-6">
                          <img src={post.image || 'https://images.unsplash.com/photo-1519834125748-958a846c483c'} className="w-14 h-14 rounded-2xl object-cover shadow-sm" />
                        </td>
                        <td className="px-10 py-6 font-bold text-slate-800 tracking-tight">{post.title}</td>
                        <td className="px-10 py-6">
                          <span className="px-4 py-1.5 bg-emerald-100 text-emerald-800 rounded-full text-[10px] font-black uppercase tracking-widest">{post.category}</span>
                        </td>
                        <td className="px-10 py-6 text-slate-400 text-xs font-medium">{post.date}</td>
                        <td className="px-10 py-6 text-right">
                          <div className="flex justify-end gap-3">
                            <button onClick={() => editPost(post)} className="w-10 h-10 flex items-center justify-center bg-blue-50 text-blue-600 hover:bg-blue-600 hover:text-white rounded-xl transition-all shadow-sm"><i className="fa-solid fa-pen"></i></button>
                            <button onClick={() => deletePost(post.id)} className="w-10 h-10 flex items-center justify-center bg-red-50 text-red-600 hover:bg-red-600 hover:text-white rounded-xl transition-all shadow-sm"><i className="fa-solid fa-trash"></i></button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              {posts.length === 0 && (
                <div className="p-20 text-center text-slate-300">
                  <i className="fa-solid fa-ghost text-7xl mb-6 opacity-10"></i>
                  <p className="font-bold">No records found in the repository.</p>
                </div>
              )}
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default AdminPanel;
