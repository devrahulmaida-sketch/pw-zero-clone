export const mockDetails = {
  data: {
    name: "Arjuna JEE 2027",
    byName: "For IIT-JEE Aspirants",
    description: `
      <p><strong>01. Live Lectures</strong> by 2 Set of Faculties & Class Notes Will be provided.</p>
      <br/>
      <p><strong>02. NCERT Punch Videos</strong> & DPPs Discussion by Batch Faculty.</p>
      <br/>
      <p><strong>03. Digital Preparation KIT :</strong></p>
      <ul>
        <li>A) Chapterwise Audio Summary & Handwritten Notes</li>
        <li>B) Chapterwise PYQ & JEE Replica sheets (Main + Advanced)</li>
        <li>C) Blueprints (Weightage analysis) & Lecturewise Concise Notes</li>
        <li>D) Digital Books</li>
      </ul>
      <br/>
      <p><strong>04. Scheduled tests & AITS</strong> will be held according to the planner</p>
      <br/>
      <p><strong>05. Revision Classes</strong> will be provided after syllabus completion</p>
    `
  }
};

export const mockSchedule = {
  data: [
    {
      type: "LECTURE",
      data: {
        topic: "Motion In a Straight Line 18 : Homework on Graphs || NO DPP || Extra Lecture || Recorded",
        startTime: "2026-06-20T16:00:00.000Z",
        subjectId: { name: "Physics By Rajwant Singh Sir" },
        videoDetails: { image: "https://static.pw.live/5eb393ee95fab7468a79d189/ADMIN/2718dd2a-e459-4046-ba88-ecd8ac611d0b.png" }
      }
    },
    {
      type: "LECTURE",
      data: {
        topic: "CBD 03 : Periodic Table || Recorded || Extra Lecture || Only Video",
        startTime: "2026-06-20T15:30:00.000Z",
        subjectId: { name: "Inorganic Chemistry By Amitabh Sharma Sir" },
        videoDetails: { image: "https://static.pw.live/5eb393ee95fab7468a79d189/ADMIN/793301e2-1c8a-4714-9608-18c38d1f83f0.png" }
      }
    }
  ]
};

export const mockAnn = {
  data: [
    {
      heading: "Cadbury Shot Challenge PDF",
      announcement: "Inorganic Chemistry Cadbury Shot Challenge PDF Update",
      createdAt: "2026-06-20T15:20:14.322Z",
      type: "GENERAL",
      attachment: {
        baseUrl: "https://static.pw.live/",
        key: "5eb393ee95fab7468a79d189/ADMIN/5ab3a26b-65aa-494b-9161-e9092f0e82ff.png"
      }
    },
    {
      heading: "Extra Recorded Lecture",
      announcement: "Physics Extra Recorded Lecture Update",
      createdAt: "2026-06-20T15:10:21.676Z",
      type: "LECTURE",
      attachment: {
        baseUrl: "https://static.pw.live/",
        key: "5eb393ee95fab7468a79d189/ADMIN/a7f61b16-e926-4187-8cc0-3e300e99a930.png"
      }
    },
    {
      heading: "Extra Recorded Lecture",
      announcement: "Inorganic Chemistry Extra Recorded Lecture Update",
      createdAt: "2026-06-20T13:16:26.041Z",
      type: "LECTURE",
      attachment: {
        baseUrl: "https://static.pw.live/",
        key: "5eb393ee95fab7468a79d189/ADMIN/3b646946-2cae-44c6-ab06-83af521369a5.png"
      }
    }
  ]
};
