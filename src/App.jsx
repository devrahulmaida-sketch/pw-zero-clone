import React, { useState, useEffect } from 'react';
import './index.css';
import { mockDetails, mockSchedule, mockAnn } from './data';

function App() {
  const [activeTab, setActiveTab] = useState('overview');
  const [batchData, setBatchData] = useState(null);
  const [scheduleData, setScheduleData] = useState(null);
  const [announcements, setAnnouncements] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Load static data
    try {
      if (mockDetails && mockDetails.data) setBatchData(mockDetails.data);
      if (mockSchedule && mockSchedule.data) setScheduleData(mockSchedule.data);
      if (mockAnn && mockAnn.data) setAnnouncements(mockAnn.data);
    } catch (e) {
      console.error("Error loading mock data", e);
    }
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div className="flex-center" style={{ height: '100vh', background: 'var(--bg-dark)' }}>
        <div style={{ textAlign: 'center' }}>
          <h2 className="animate-fade-in" style={{ color: 'var(--accent-color)' }}>Loading Arjuna JEE 2027...</h2>
          <div style={{ marginTop: 20, width: 40, height: 40, borderRadius: '50%', border: '3px solid var(--glass-border)', borderTopColor: 'var(--accent-color)', animation: 'spin 1s linear infinite' }} />
        </div>
        <style>{`@keyframes spin { 100% { transform: rotate(360deg); } }`}</style>
      </div>
    );
  }

  return (
    <div className="container" style={{ padding: '40px 20px' }}>
      {/* Header */}
      <header className="glass-panel animate-fade-in" style={{ padding: '30px', marginBottom: '30px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <span className="badge badge-purple" style={{ marginBottom: '10px', display: 'inline-block' }}>Target 2027</span>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '10px', background: 'var(--accent-gradient)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            {batchData?.name || "Arjuna JEE 2027"}
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>{batchData?.byName || "For IIT-JEE Aspirants"}</p>
        </div>
        <button className="btn-primary">Enroll Now</button>
      </header>

      {/* Tabs */}
      <div className="glass-panel animate-fade-in animate-delay-1" style={{ padding: '10px', marginBottom: '30px', display: 'flex', gap: '10px', overflowX: 'auto' }}>
        {['overview', 'schedule', 'announcements'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            style={{
              padding: '12px 24px',
              background: activeTab === tab ? 'rgba(59, 130, 246, 0.2)' : 'transparent',
              border: activeTab === tab ? '1px solid rgba(59, 130, 246, 0.4)' : '1px solid transparent',
              color: activeTab === tab ? 'var(--text-primary)' : 'var(--text-secondary)',
              borderRadius: '8px',
              cursor: 'pointer',
              textTransform: 'capitalize',
              fontWeight: 600,
              transition: 'all 0.3s'
            }}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Content Area */}
      <div className="animate-fade-in animate-delay-2">
        {activeTab === 'overview' && (
          <div className="glass-panel" style={{ padding: '30px' }}>
            <h2 style={{ marginBottom: '20px', borderBottom: '1px solid var(--glass-border)', paddingBottom: '10px' }}>Batch Details</h2>
            {batchData?.description ? (
              <div style={{ color: '#cbd5e1', lineHeight: '1.8' }} dangerouslySetInnerHTML={{ __html: batchData.description }} />
            ) : (
              <div style={{ color: '#cbd5e1', lineHeight: '1.8' }}>
                <p>1. Live Lectures by 2 Set of Faculties & Class Notes Will be provided.</p>
                <p>2. NCERT Punch Videos & DPPs Discussion by Batch Faculty.</p>
                <p>3. Chapterwise Audio Summary & Handwritten Notes.</p>
                <p>4. Chapterwise PYQ & JEE Replica sheets (Main + Advanced).</p>
              </div>
            )}
          </div>
        )}

        {activeTab === 'schedule' && (
          <div className="grid-auto">
            {scheduleData?.length > 0 ? scheduleData.map((item, idx) => (
              <div key={idx} className="glass-panel" style={{ padding: '20px', display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }}>
                  <span className="badge badge-blue">{new Date(item.data?.startTime).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}) || 'TBD'}</span>
                  <span className="badge badge-green">{item.type || 'Class'}</span>
                </div>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '10px', color: '#f8fafc' }}>{item.data?.topic}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: 'auto' }}>
                  {item.data?.subjectId?.name || "Subject Details"}
                </p>
                {item.data?.videoDetails?.image && (
                  <img src={item.data.videoDetails.image} alt="thumbnail" style={{ width: '100%', height: '140px', objectFit: 'cover', borderRadius: '8px', marginTop: '15px' }} />
                )}
                <button className="btn-primary" style={{ marginTop: '15px', width: '100%' }}>Watch Now</button>
              </div>
            )) : (
              <p style={{ color: 'var(--text-secondary)' }}>No schedule found for today.</p>
            )}
          </div>
        )}

        {activeTab === 'announcements' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            {announcements?.length > 0 ? announcements.map((ann, idx) => (
              <div key={idx} className="glass-panel" style={{ padding: '20px', borderLeft: `4px solid ${ann.type === 'LECTURE' ? 'var(--accent-color)' : 'var(--warning)'}` }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                  <span className="badge badge-purple" style={{ fontSize: '10px' }}>{ann.type}</span>
                  <span style={{ color: 'var(--text-secondary)', fontSize: '12px' }}>{new Date(ann.createdAt).toLocaleString()}</span>
                </div>
                <h3 style={{ marginBottom: '8px' }}>{ann.heading}</h3>
                <p style={{ color: '#cbd5e1', fontSize: '0.95rem' }}>{ann.announcement}</p>
                {ann.attachment?.baseUrl && ann.attachment?.key && (
                    <a href={`${ann.attachment.baseUrl}${ann.attachment.key}`} target="_blank" rel="noreferrer" style={{ display: 'inline-block', marginTop: '10px', color: 'var(--accent-color)', textDecoration: 'none' }}>View Attachment</a>
                )}
              </div>
            )) : (
              <p style={{ color: 'var(--text-secondary)' }}>No announcements found.</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
