// Hệ thống Luyện thi Giải tích 1 - Giao diện chia từng khối, Phương pháp Casio trên Taskbar, Thống kê & Lịch học
(function () {
  const BANK_MAP = {};
  (window.QUESTION_BANK || []).forEach((q) => {
    BANK_MAP[q.id] = q;
  });

  const CHAPTER_NAMES = {
    1: "Chương 1: Giới hạn & Liên tục",
    2: "Chương 2: Đạo hàm & Vi phân",
    3: "Chương 3: Tích phân",
    4: "Chương 4: Chuỗi số & Chuỗi hàm"
  };

  const LETTERS = ["a", "b", "c", "d"];

  const CASIO_METHODS = [
    {
      id: "m1",
      title: "1. Giới hạn hàm số & Tìm m để hàm liên tục (Ch.1 & Ch.2)",
      content: `
        <p><b>Phương pháp CALC cố định (Chế độ Radian <code>Rad</code>):</b></p>
        <ul style="margin-left: 18px; margin-top: 6px;">
          <li>Nhập biểu thức \\(f(X)\\) vào máy rồi bấm <code>CALC</code>:</li>
          <li>Khi \\(x \\to x_0^+\\): nhập \\(X = x_0 + 10^{-5}\\) (nếu có mũ \\(e^{1/x}\\) hoặc căn bậc cao dễ tràn số thì nhập \\(X = x_0 + 0,01\\)).</li>
          <li>Khi \\(x \\to x_0^-\\): nhập \\(X = x_0 - 10^{-5}\\) (hoặc \\(x_0 - 0,01\\)).</li>
          <li>Khi \\(x \\to +\\infty\\): nhập \\(X = 10^5\\) (nếu có hàm mũ \\(e^x, 3^x, 7^x\\) thì nhập \\(X = 50\\)). Khi \\(x \\to -\\infty\\): nhập \\(X = -10^5\\) (hoặc \\(-50\\)).</li>
          <li><b>Tìm \\(m\\) để hàm liên tục tại \\(x_0\\):</b> Bấm <code>CALC</code> giới hạn hai phía ra số \\(L\\), rồi giải phương trình \\(f(x_0) = L\\). Nếu 2 phía khác nhau hoặc ra \\(\\infty\\) \\(\\Rightarrow\\) chọn <i>Không tồn tại \\(m\\)</i>.</li>
        </ul>
      `
    },
    {
      id: "m2",
      title: "2. Vô cùng bé tương đương f(x) ~ g(x) khi x → 0 (Ch.1)",
      content: `
        <p><b>Phương pháp CALC tỉ số bằng 1:</b></p>
        <ul style="margin-left: 18px; margin-top: 6px;">
          <li>Hai VCB tương đương khi \\(\\lim_{x\\to 0}\\frac{f(x)}{g(x)} = 1\\).</li>
          <li>Nhập phân thức \\(\\frac{f(X)}{\\text{Đáp án}}\\) vào máy (chế độ <code>Rad</code>), bấm <code>CALC</code> tại \\(X = 10^{-4}\\).</li>
          <li>Đáp án nào cho kết quả xấp xỉ <b>\\(1\\)</b> (ví dụ \\(0,9999\\) hoặc \\(1,0001\\)) là đáp án đúng.</li>
        </ul>
      `
    },
    {
      id: "m3",
      title: "3. Đạo hàm, Vi phân & Hàm tham số x(t), y(t) (Ch.2)",
      content: `
        <p><b>Phương pháp phím \\(\\frac{d}{dx}\\) cố định:</b></p>
        <ul style="margin-left: 18px; margin-top: 6px;">
          <li><b>Đạo hàm & Vi phân cấp 1:</b> Chọn \\(X = 1,5\\). Bấm \\(\\left.\\frac{d}{dx}(f(X))\\right|_{X=1,5}\\) để lấy kết quả số \\(A\\), rồi thay \\(X = 1,5\\) vào 4 đáp án để đối chiếu. (Với đạo hàm cấp \\(n\\), cho \\(n = 1\\) để đưa về đạo hàm cấp 1).</li>
          <li><b>Hàm tham số \\(x = x(t), y = y(t)\\):</b> Bấm trực tiếp phân số \\(y'_x = \\frac{\\left.\\frac{d}{dx}(y(X))\\right|_{X=t_0}}{\\left.\\frac{d}{dx}(x(X))\\right|_{X=t_0}}\\).</li>
        </ul>
      `
    },
    {
      id: "m4",
      title: "4. Tích phân bất định ∫f(x)dx = F(x) + C (Ch.3)",
      content: `
        <p><b>Phương pháp Đạo hàm đáp án bằng hàm dưới tích phân:</b></p>
        <ul style="margin-left: 18px; margin-top: 6px;">
          <li>Chọn \\(X = 1,5\\) (nếu đề có tham số \\(a\\) thì cho \\(a = 2\\)). Tính giá trị \\(f(1,5)\\).</li>
          <li>Bấm \\(\\left.\\frac{d}{dx}(\\text{Đáp án})\\right|_{X=1,5}\\), đáp án nào cho kết quả trùng khớp với \\(f(1,5)\\) là đáp án đúng.</li>
          <li><i>Lưu ý:</i> Nguyên hàm \\(\\int\\frac{du}{u} = \\ln|u| + C\\) luôn phải có dấu giá trị tuyệt đối \\(|u|\\).</li>
        </ul>
      `
    },
    {
      id: "m5",
      title: "5. Tính giá trị Tích phân suy rộng (Ch.3)",
      content: `
        <p><b>Phương pháp Xấp xỉ cận tích phân trên máy:</b></p>
        <ul style="margin-left: 18px; margin-top: 6px;">
          <li>Dùng phím tích phân xác định \\(\\int_a^b f(X)dX\\) trên máy tính:</li>
          <li>Nếu cận là \\(+\\infty\\): thay bằng \\(100\\) (hoặc \\(50\\)). Nếu cận là \\(-\\infty\\): thay bằng \\(-100\\).</li>
          <li>Nếu hàm không xác định (kỳ dị) tại cận \\(a\\): thay \\(a\\) bằng \\(a + 10^{-4}\\) (hoặc cận trên \\(b\\) bằng \\(b - 10^{-4}\\)).</li>
          <li>Đối chiếu kết quả số thập phân với 4 đáp án A, B, C, D.</li>
        </ul>
      `
    },
    {
      id: "m6",
      title: "6. Xét hội tụ Tích phân suy rộng & Chuỗi (Ch.3 & Ch.4)",
      content: `
        <p><b>Quy tắc Bậc chuẩn & Kiểm tra điều kiện cần:</b></p>
        <ul style="margin-left: 18px; margin-top: 6px;">
          <li><b>Tại \\(\\infty\\) (Tích phân loại 1 & Chuỗi số dương):</b> Giữ lại số hạng bậc lớn nhất. Hội tụ \\(\\Leftrightarrow \\alpha = \\text{Bậc mẫu} - \\text{Bậc tử} > 1\\).</li>
          <li><b>Tại điểm kỳ dị \\(x_0\\) (Tích phân loại 2):</b> Giữ lại VCB bậc thấp nhất. Hội tụ \\(\\Leftrightarrow \\alpha = \\text{Bậc mẫu} - \\text{Bậc tử} < 1\\).</li>
          <li><b>Chuỗi đan dấu \\(\\sum(-1)^n u_n\\):</b> Tính \\(\\alpha = \\text{Bậc mẫu} - \\text{Bậc tử}\\):
            <br>• Nếu \\(\\alpha > 1 \\Rightarrow\\) <b>Hội tụ tuyệt đối</b>.
            <br>• Nếu \\(0 < \\alpha \\le 1 \\Rightarrow\\) <b>Bán hội tụ (hội tụ tương đối)</b>.
            <br>• Nếu \\(\\alpha \\le 0\\) (hoặc bấm <code>CALC</code> \\(u_{100} \\ne 0\\)) \\(\\Rightarrow\\) <b>Phân kỳ</b>.
          </li>
        </ul>
      `
    }
  ];

  const STORAGE_KEYS = {
    HISTORY: "gt1_exam_history_v3",
    CUSTOM_EXAMS: "gt1_custom_exams_v3",
    CHAPTER_STATS: "gt1_chapter_stats_v3",
    STUDY_DAYS: "gt1_study_days_v3",
    DARK_MODE: "gt1_dark_mode_v3"
  };

  function loadJson(key, fallback) {
    try {
      const raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : fallback;
    } catch (e) {
      return fallback;
    }
  }

  function saveJson(key, val) {
    try {
      localStorage.setItem(key, JSON.stringify(val));
    } catch (e) {}
  }

  const nowInit = new Date();
  let state = {
    mode: "lobby", // "lobby" | "taking" | "submitted" | "review"
    topTab: "exams", // "exams" | "casio" (trên thanh Taskbar)
    blockFilter: "all", // "all" | "practice" | "ch1" | "ch2" | "ch3" | "ch4"
    selectedExamId: "de_1",
    currentExamId: "de_1",
    currentExamTitle: "Giải tích 1 - Đề tổng hợp số 1",
    isCurrentRandomNew: false,
    currentRandomChapter: null,
    courseCode: "BS0.101.3-1-1-26(N60)",
    durationMinutes: 50,
    questions: [],
    userAnswers: {},
    flagged: {},
    singlePageMode: false,
    currentSingleIndex: 0,
    reviewFilter: "all",
    startTime: null,
    endTime: null,
    remainingSec: 50 * 60,
    elapsedSec: 0,
    timerInterval: null,
    calYear: nowInit.getFullYear(),
    calMonth: nowInit.getMonth(), // 0..11
    completedHistory: loadJson(STORAGE_KEYS.HISTORY, {}),
    customExams: loadJson(STORAGE_KEYS.CUSTOM_EXAMS, []),
    chapterStats: loadJson(STORAGE_KEYS.CHAPTER_STATS, {
      1: { answered: 0, correct: 0 },
      2: { answered: 0, correct: 0 },
      3: { answered: 0, correct: 0 },
      4: { answered: 0, correct: 0 }
    }),
    studyDays: loadJson(STORAGE_KEYS.STUDY_DAYS, {}),
    darkMode: loadJson(STORAGE_KEYS.DARK_MODE, false)
  };

  function applyTheme() {
    document.body.classList.toggle("dark-mode", !!state.darkMode);
    const btn = document.getElementById("theme-toggle-btn");
    if (btn) {
      btn.textContent = state.darkMode ? "Giao diện sáng" : "Giao diện tối";
    }
  }

  function getTodayDateKey(dObj) {
    const d = dObj || new Date();
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    return `${y}-${m}-${day}`;
  }

  function markTodayStudied() {
    const key = getTodayDateKey(new Date());
    state.studyDays[key] = (state.studyDays[key] || 0) + 1;
    saveJson(STORAGE_KEYS.STUDY_DAYS, state.studyDays);
  }

  // Tính chuỗi ngày học liên tiếp (Streak)
  function computeStreakInfo() {
    const keys = Object.keys(state.studyDays).filter((k) => state.studyDays[k] > 0).sort();
    const totalDays = keys.length;
    if (totalDays === 0) return { currentStreak: 0, totalDays: 0 };

    let streak = 0;
    const cursor = new Date();
    cursor.setHours(0, 0, 0, 0);

    const todayKey = getTodayDateKey(cursor);
    if (!state.studyDays[todayKey]) {
      cursor.setDate(cursor.getDate() - 1);
    }

    while (true) {
      const k = getTodayDateKey(cursor);
      if (state.studyDays[k]) {
        streak += 1;
        cursor.setDate(cursor.getDate() - 1);
      } else {
        break;
      }
    }
    return { currentStreak: streak, totalDays };
  }

  // Danh sách toàn bộ các đề cố định + đề tự luyện đã làm
  function getAllExamDescriptors() {
    const list = [];
    (window.PRESET_EXAMS || []).forEach((ex) => {
      list.push({
        id: ex.id,
        title: `Giải tích 1 - Đề tổng hợp số ${ex.number}`,
        shortTitle: ex.title,
        category: "full",
        chapter: null,
        questionCount: ex.question_ids.length,
        durationMinutes: ex.duration_minutes || 50,
        question_ids: ex.question_ids,
        isCustom: false
      });
    });

    (window.CHAPTER_EXAMS || []).forEach((ex) => {
      list.push({
        id: ex.id,
        title: `Giải tích 1 - Chương ${ex.chapter} - Đề số ${ex.number}`,
        shortTitle: ex.title,
        category: "chapter",
        chapter: ex.chapter,
        questionCount: ex.question_ids.length,
        durationMinutes: ex.duration_minutes || 35,
        question_ids: ex.question_ids,
        isCustom: false
      });
    });

    (state.customExams || []).forEach((cx) => {
      list.push({
        id: cx.id,
        title: cx.title,
        shortTitle: cx.title,
        category: "custom",
        chapter: cx.chapter || null,
        questionCount: cx.question_ids.length,
        durationMinutes: cx.duration_minutes,
        question_ids: cx.question_ids,
        isCustom: true
      });
    });

    return list;
  }

  function getExamDescriptor(examId) {
    if (examId === "random_full") {
      return {
        id: "random_full",
        title: "Bài tự luyện ngẫu nhiên - Tổng hợp 4 chương (40 câu)",
        category: "custom",
        chapter: null,
        questionCount: 40,
        durationMinutes: 50,
        isRandomGenerator: true
      };
    }
    if (examId && examId.startsWith("random_ch_")) {
      const ch = parseInt(examId.replace("random_ch_", ""), 10);
      return {
        id: examId,
        title: `Bài tự luyện ngẫu nhiên - Chương ${ch} (20 câu)`,
        category: "custom",
        chapter: ch,
        questionCount: 20,
        durationMinutes: 35,
        isRandomGenerator: true
      };
    }
    const all = getAllExamDescriptors();
    return all.find((x) => x.id === examId) || all[0];
  }

  function shuffleArray(arr) {
    const copy = arr.slice();
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }

  // Đếm số lần mỗi câu hỏi đã xuất hiện trong lịch sử làm bài (tự luyện + đề cố định đã hoàn thành)
  function getQuestionUsageCounts() {
    const counts = {};
    const countedExamIds = new Set();
    const descriptorById = new Map(getAllExamDescriptors().map((d) => [d.id, d]));

    const addExamQuestions = (examId, qIds) => {
      if (!examId || countedExamIds.has(examId) || !Array.isArray(qIds)) return;
      countedExamIds.add(examId);
      qIds.forEach((qid) => {
        counts[qid] = (counts[qid] || 0) + 1;
      });
    };

    (state.customExams || []).forEach((cx) => {
      addExamQuestions(cx.id, cx.question_ids);
    });

    Object.keys(state.completedHistory || {}).forEach((examId) => {
      const desc = descriptorById.get(examId);
      if (desc) addExamQuestions(examId, desc.question_ids);
    });

    return counts;
  }

  // Chọn câu hỏi ngẫu nhiên thông minh: ưu tiên câu chưa gặp hoặc ít gặp nhất để giảm trùng lặp
  function pickSmartRandomQuestions(pool, count, usageCounts) {
    if (!Array.isArray(pool) || pool.length === 0 || count <= 0) return [];
    const counts = usageCounts || getQuestionUsageCounts();

    const buckets = new Map();
    pool.forEach((q) => {
      const c = counts[q.id] || 0;
      if (!buckets.has(c)) buckets.set(c, []);
      buckets.get(c).push(q);
    });

    const ordered = [];
    Array.from(buckets.keys())
      .sort((a, b) => a - b)
      .forEach((level) => {
        ordered.push(...shuffleArray(buckets.get(level)));
      });

    return ordered.slice(0, Math.min(count, ordered.length));
  }

  // Bắt đầu làm bài thi (Chỉ chạy khi bấm nút "Bắt đầu thi")
  function launchExam(examId) {
    stopTimer();
    const desc = getExamDescriptor(examId);
    let examQuestions = [];

    if (desc.id === "random_full") {
      const byCh = { 1: [], 2: [], 3: [], 4: [] };
      (window.QUESTION_BANK || []).forEach((q) => byCh[q.chapter].push(q));
      const usageCounts = getQuestionUsageCounts();
      examQuestions = shuffleArray([
        ...pickSmartRandomQuestions(byCh[1], 10, usageCounts),
        ...pickSmartRandomQuestions(byCh[2], 9, usageCounts),
        ...pickSmartRandomQuestions(byCh[3], 10, usageCounts),
        ...pickSmartRandomQuestions(byCh[4], 11, usageCounts)
      ]);
      state.isCurrentRandomNew = true;
      state.currentRandomChapter = null;
      const nextNum = (state.customExams || []).length + 1;
      state.currentExamId = `custom_${Date.now()}`;
      state.currentExamTitle = `Bài tự luyện #${nextNum} - Tổng hợp 4 chương`;
      state.durationMinutes = 50;
    } else if (desc.id && desc.id.startsWith("random_ch_")) {
      const ch = desc.chapter;
      const chPool = (window.QUESTION_BANK || []).filter((q) => q.chapter === ch);
      examQuestions = pickSmartRandomQuestions(chPool, 20);
      state.isCurrentRandomNew = true;
      state.currentRandomChapter = ch;
      const nextNum = (state.customExams || []).length + 1;
      state.currentExamId = `custom_${Date.now()}`;
      state.currentExamTitle = `Bài tự luyện #${nextNum} - Chương ${ch}`;
      state.durationMinutes = 35;
    } else {
      examQuestions = (desc.question_ids || []).map((id) => BANK_MAP[id]).filter(Boolean);
      state.isCurrentRandomNew = false;
      state.currentRandomChapter = desc.chapter || null;
      state.currentExamId = desc.id;
      state.currentExamTitle = desc.title;
      state.durationMinutes = desc.durationMinutes || 50;
    }

    state.questions = examQuestions;
    state.userAnswers = {};
    state.flagged = {};
    state.mode = "taking";
    state.currentSingleIndex = 0;
    state.reviewFilter = "all";
    state.startTime = new Date();
    state.endTime = null;
    state.elapsedSec = 0;
    state.remainingSec = state.durationMinutes * 60;

    startTimer();
    renderAll();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // Xem lại bài thi đã làm từ thẻ ngoài màn hình chính
  function reviewSavedExam(examId) {
    const hist = state.completedHistory[examId];
    const desc = getExamDescriptor(examId);
    if (!hist || !desc || !desc.question_ids) return;

    stopTimer();
    state.currentExamId = desc.id;
    state.currentExamTitle = desc.title;
    state.durationMinutes = desc.durationMinutes;
    state.questions = desc.question_ids.map((id) => BANK_MAP[id]).filter(Boolean);
    state.userAnswers = hist.savedAnswers || {};
    state.flagged = {};
    state.startTime = hist.startTime ? new Date(hist.startTime) : new Date();
    state.endTime = hist.endTime ? new Date(hist.endTime) : new Date();
    state.elapsedSec = hist.durationSec || 60;
    state.mode = "review";
    state.reviewFilter = "all";
    renderAll();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // Khi đang ở trong đề thi mà muốn thoát ra thì LUÔN hỏi xác nhận
  function goToLobby(targetTopTab) {
    if (state.mode === "taking") {
      const ok = window.confirm("Bạn đang trong thời gian làm bài thi. Bạn có xác nhận muốn thoát khỏi đề thi này không?");
      if (!ok) return;
    }
    stopTimer();
    state.mode = "lobby";
    if (targetTopTab) {
      state.topTab = targetTopTab;
    }
    renderAll();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function startTimer() {
    stopTimer();
    state.timerInterval = setInterval(() => {
      if (state.mode !== "taking") {
        stopTimer();
        return;
      }
      state.elapsedSec += 1;
      const totalSec = state.durationMinutes * 60;
      state.remainingSec = Math.max(0, totalSec - state.elapsedSec);
      updateTimerUI();
      if (state.remainingSec <= 0) {
        stopTimer();
        submitExam(true);
      }
    }, 1000);
  }

  function stopTimer() {
    if (state.timerInterval) {
      clearInterval(state.timerInterval);
      state.timerInterval = null;
    }
  }

  function formatMoodleDate(dateObj) {
    if (!dateObj) return "";
    const d = new Date(dateObj);
    const days = ["Chủ Nhật", "Thứ Hai", "Thứ Ba", "Thứ Tư", "Thứ Năm", "Thứ Sáu", "Thứ Bảy"];
    const dayName = days[d.getDay()];
    const day = d.getDate();
    const month = d.getMonth() + 1;
    const year = d.getFullYear();
    let hours = d.getHours();
    const minutes = String(d.getMinutes()).padStart(2, "0");
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    if (hours === 0) hours = 12;
    return `${dayName}, ${day} tháng ${month} ${year}, ${hours}:${minutes} ${ampm}`;
  }

  function formatDuration(sec) {
    const s = Math.max(1, Math.floor(sec));
    const mins = Math.floor(s / 60);
    const remSec = s % 60;
    if (mins === 0) return `${remSec} giây`;
    if (remSec === 0) return `${mins} phút`;
    return `${mins} phút ${remSec} giây`;
  }

  function formatCountdown(sec) {
    const s = Math.max(0, Math.floor(sec));
    const m = String(Math.floor(s / 60)).padStart(2, "0");
    const r = String(s % 60).padStart(2, "0");
    return `${m}:${r}`;
  }

  function formatScore(num) {
    return Number(num || 0).toFixed(2).replace(".", ",");
  }

  function updateTopNavbar() {
    const toggleBtn = document.getElementById("sidebar-toggle-btn");
    const headerLabel = document.getElementById("active-exam-header-label");
    const timerBadge = document.getElementById("timer-badge");
    const navHome = document.getElementById("nav-home-btn");
    const navCasio = document.getElementById("nav-casio-btn");

    if (navHome && navCasio) {
      navHome.classList.toggle("active", state.mode === "lobby" && state.topTab === "exams");
      navCasio.classList.toggle("active", state.mode === "lobby" && state.topTab === "casio");
    }

    if (state.mode === "lobby") {
      if (toggleBtn) toggleBtn.style.display = "none";
      if (headerLabel) headerLabel.textContent = "";
      if (navCasio) navCasio.style.display = "inline-flex";
      if (timerBadge) timerBadge.style.display = "none";
    } else if (state.mode === "taking") {
      if (toggleBtn) toggleBtn.style.display = "inline-flex";
      if (headerLabel) headerLabel.textContent = `Đang thi: ${state.currentExamTitle}`;
      if (navCasio) navCasio.style.display = "none";
      if (timerBadge) timerBadge.style.display = "inline-flex";
      updateTimerUI();
    } else {
      if (toggleBtn) toggleBtn.style.display = "inline-flex";
      if (headerLabel) headerLabel.textContent = `Đã nộp bài: ${state.currentExamTitle}`;
      if (navCasio) navCasio.style.display = "inline-flex";
      if (timerBadge) timerBadge.style.display = "none";
    }
  }

  function updateTimerUI() {
    const badge = document.getElementById("timer-badge");
    const sidebarTimer = document.getElementById("sidebar-timer-text");
    const text = formatCountdown(state.remainingSec);

    if (badge && state.mode === "taking") {
      badge.style.display = "inline-flex";
      badge.innerHTML = `Thời gian: <span>${text}</span>`;
      badge.className = "timer-badge";
      if (state.remainingSec <= 60) badge.classList.add("danger");
      else if (state.remainingSec <= 300) badge.classList.add("warning");
    }
    if (sidebarTimer) {
      sidebarTimer.textContent = text;
    }
  }

  // Nộp bài & Lưu kết quả (Tự động thêm ô mới vào khối tương ứng nếu là bài tự luyện random)
  function submitExam(autoSubmit) {
    if (state.mode !== "taking") return;

    if (!autoSubmit) {
      const answeredCount = Object.keys(state.userAnswers).length;
      const unanswered = state.questions.length - answeredCount;
      const msg =
        unanswered > 0
          ? `Bạn còn ${unanswered}/${state.questions.length} câu chưa chọn đáp án.\nBạn có xác nhận muốn nộp bài và kết thúc không?`
          : `Bạn đã hoàn thành tất cả ${state.questions.length} câu hỏi.\nBấm OK để nộp bài và xem điểm.`;
      if (!window.confirm(msg)) return;
    }

    stopTimer();
    state.endTime = new Date();
    const maxSec = state.durationMinutes * 60;
    const realDiffSec = Math.max(1, Math.round((state.endTime - state.startTime) / 1000));
    state.elapsedSec = Math.min(maxSec, Math.max(state.elapsedSec, realDiffSec));
    state.mode = "submitted";

    const stats = computeStats();

    if (state.isCurrentRandomNew) {
      const newCustomExam = {
        id: state.currentExamId,
        title: state.currentExamTitle,
        chapter: state.currentRandomChapter,
        duration_minutes: state.durationMinutes,
        question_ids: state.questions.map((q) => q.id),
        createdAt: state.endTime.toISOString()
      };
      state.customExams.unshift(newCustomExam);
      saveJson(STORAGE_KEYS.CUSTOM_EXAMS, state.customExams);
      state.selectedExamId = state.currentExamId;
      state.isCurrentRandomNew = false;
    }

    state.completedHistory[state.currentExamId] = {
      score10: stats.score10,
      accuracy: stats.percent,
      correctCount: stats.correctCount,
      total: stats.total,
      durationSec: state.elapsedSec,
      startTime: state.startTime.toISOString(),
      endTime: state.endTime.toISOString(),
      savedAnswers: { ...state.userAnswers }
    };
    saveJson(STORAGE_KEYS.HISTORY, state.completedHistory);

    [1, 2, 3, 4].forEach((ch) => {
      const chData = stats.byChapter[ch];
      if (chData && chData.total > 0) {
        if (!state.chapterStats[ch]) state.chapterStats[ch] = { answered: 0, correct: 0 };
        state.chapterStats[ch].answered += chData.total;
        state.chapterStats[ch].correct += chData.correct;
      }
    });
    saveJson(STORAGE_KEYS.CHAPTER_STATS, state.chapterStats);

    markTodayStudied();

    renderAll();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function enterReviewMode() {
    state.mode = "review";
    state.reviewFilter = "all";
    renderAll();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function computeStats() {
    const total = state.questions.length;
    let correctCount = 0;
    const byChapter = {
      1: { total: 0, correct: 0 },
      2: { total: 0, correct: 0 },
      3: { total: 0, correct: 0 },
      4: { total: 0, correct: 0 }
    };

    state.questions.forEach((q, idx) => {
      const ch = q.chapter || 1;
      if (byChapter[ch]) byChapter[ch].total += 1;
      if (state.userAnswers[idx] === q.correct) {
        correctCount += 1;
        if (byChapter[ch]) byChapter[ch].correct += 1;
      }
    });

    const score10 = total > 0 ? (correctCount / total) * 10 : 0;
    const percent = total > 0 ? Math.round((correctCount / total) * 100) : 0;
    const pointPerQuestion = total > 0 ? 10 / total : 0.25;
    return { total, correctCount, score10, percent, pointPerQuestion, byChapter };
  }

  // Tính toán thông số tổng quan cho Ô 2
  function computeGlobalAnalytics() {
    const presetFullIds = (window.PRESET_EXAMS || []).map((e) => e.id);
    const presetChapIds = (window.CHAPTER_EXAMS || []).map((e) => e.id);
    const allFixedIds = [...presetFullIds, ...presetChapIds];

    let fixedDoneCount = 0;
    allFixedIds.forEach((id) => {
      if (state.completedHistory[id]) fixedDoneCount += 1;
    });
    const fixedRemainingCount = allFixedIds.length - fixedDoneCount;

    const allCompletedEntries = Object.values(state.completedHistory);
    const totalCompletedExams = allCompletedEntries.length;

    let avgScore = 0;
    let avgAccuracy = 0;
    if (totalCompletedExams > 0) {
      let sumScore = 0;
      let sumCorrect = 0;
      let sumTotal = 0;
      allCompletedEntries.forEach((item) => {
        sumScore += Number(item.score10 || 0);
        sumCorrect += Number(item.correctCount || 0);
        sumTotal += Number(item.total || 0);
      });
      avgScore = sumScore / totalCompletedExams;
      avgAccuracy = sumTotal > 0 ? Math.round((sumCorrect / sumTotal) * 100) : 0;
    }

    const chapterEvaluations = [];
    const weakChapters = [];
    [1, 2, 3, 4].forEach((ch) => {
      const st = state.chapterStats[ch] || { answered: 0, correct: 0 };
      if (st.answered === 0) {
        chapterEvaluations.push({
          chapter: ch,
          name: CHAPTER_NAMES[ch],
          accText: "Chưa làm",
          statusText: "Chưa có dữ liệu",
          acc: null
        });
      } else {
        const acc = Math.round((st.correct / st.answered) * 100);
        let statusText = "Khá / Tốt";
        if (acc < 60) {
          statusText = "Còn yếu (Cần ôn thêm)";
          weakChapters.push(`Chương ${ch} (${acc}%)`);
        } else if (acc < 75) {
          statusText = "Trung bình";
        }
        chapterEvaluations.push({
          chapter: ch,
          name: CHAPTER_NAMES[ch],
          accText: `${acc}% (${st.correct}/${st.answered} câu)`,
          statusText,
          acc
        });
      }
    });

    if (weakChapters.length === 0) {
      const practiced = chapterEvaluations.filter((c) => c.acc !== null && c.acc < 80);
      if (practiced.length > 0) {
        practiced.sort((a, b) => a.acc - b.acc);
        weakChapters.push(`Chương ${practiced[0].chapter} (${practiced[0].acc}%)`);
      }
    }

    const weakSummary =
      totalCompletedExams === 0
        ? "Chưa có dữ liệu (Hãy làm ít nhất 1 đề)"
        : weakChapters.length > 0
        ? weakChapters.join(", ")
        : "Đã nắm vững cả 4 chương (Độ chính xác >= 80%)";

    return {
      totalCompletedExams,
      fixedDoneCount,
      fixedTotalCount: allFixedIds.length,
      fixedRemainingCount,
      customCount: (state.customExams || []).length,
      avgScore,
      avgAccuracy,
      chapterEvaluations,
      weakSummary
    };
  }

  // Render từng thẻ đề thi trong mỗi khối
  function buildExamCardHtml(item) {
    const isSelected = state.selectedExamId === item.id;
    const hist = state.completedHistory[item.id];
    const scoreRowVal = hist
      ? `<span class="portal-card-val done-green">${formatScore(hist.score10)} / 10,00</span>`
      : `<span class="portal-card-val">Chưa làm</span>`;
    const accRowVal = hist
      ? `<span class="portal-card-val done-green">${hist.accuracy}% (${hist.correctCount}/${hist.total})</span>`
      : `<span class="portal-card-val">Chưa làm</span>`;

    return `
      <div class="portal-exam-card ${isSelected ? "selected-card" : ""}" data-card-exam-id="${item.id}">
        <div class="portal-card-header">
          ${item.title}
        </div>
        <div class="portal-card-body">
          <div class="portal-card-row">
            <span>Số lượng câu hỏi:</span>
            <span class="portal-card-val">${item.questionCount}</span>
          </div>
          <div class="portal-card-row">
            <span>Thời gian làm bài:</span>
            <span class="portal-card-val">${item.durationMinutes} phút</span>
          </div>
          <div class="portal-card-row">
            <span>Điểm số:</span>
            ${scoreRowVal}
          </div>
          <div class="portal-card-row">
            <span>Độ chính xác:</span>
            ${accRowVal}
          </div>
          <div class="portal-card-actions">
            <button type="button" class="btn-card-outline" data-select-card-btn="${item.id}">
              ${isSelected ? "Đang chọn" : "Chọn đề"}
            </button>
            ${
              isSelected
                ? `<button type="button" class="btn-card-start" data-start-card-btn="${item.id}">Bắt đầu thi</button>`
                : ""
            }
            ${
              hist && hist.savedAnswers
                ? `<button type="button" class="btn-card-outline" data-review-saved-btn="${item.id}">Xem đáp án</button>`
                : ""
            }
          </div>
        </div>
      </div>
    `;
  }

  // Render một Khối đề thi hoàn chỉnh kèm Thanh tiến độ riêng của khối đó
  function buildBlockSectionHtml(blockConfig) {
    const {
      title,
      subtitle,
      fixedList,
      customList,
      randomBtnId,
      randomBtnLabel
    } = blockConfig;

    const totalFixed = fixedList.length;
    let doneFixed = 0;
    fixedList.forEach((ex) => {
      if (state.completedHistory[ex.id]) doneFixed += 1;
    });
    const pct = totalFixed > 0 ? Math.round((doneFixed / totalFixed) * 100) : 0;

    const customNote =
      customList.length > 0
        ? ` | Đã làm thêm: ${customList.length} bài tự luyện ngẫu nhiên`
        : " | Không tính bài tự luyện ngẫu nhiên";

    const allCardsInBlock = [...fixedList, ...customList];
    const cardsHtml = allCardsInBlock.map((item) => buildExamCardHtml(item)).join("");

    return `
      <div class="exam-block-section">
        <div class="exam-block-header">
          <div class="exam-block-top-row">
            <div>
              <div class="exam-block-title">${title}</div>
              <div class="exam-block-subtitle">${subtitle}</div>
            </div>
            <div class="exam-block-actions">
              <button type="button" class="btn-create-random" data-pick-random-id="${randomBtnId}">
                ${randomBtnLabel}
              </button>
            </div>
          </div>

          <div class="block-progress-wrap">
            <div class="block-progress-label">
              <span>Tiến độ hoàn thành khối (Đề cố định):</span>
              <span><b>${doneFixed}/${totalFixed} đề (${pct}%)</b>${customNote}</span>
            </div>
            <div class="block-progress-track">
              <div class="block-progress-fill" style="width: ${pct}%;"></div>
            </div>
          </div>
        </div>

        <div class="exam-block-body">
          <div class="portal-cards-grid">
            ${cardsHtml}
          </div>
        </div>
      </div>
    `;
  }

  // ============================================================================
  // RENDER MÀN HÌNH CHÍNH (CHIA TỪNG KHỐI RÕ RÀNG HOẶC TRANG PHƯƠNG PHÁP CASIO)
  // ============================================================================
  function renderLobbyView() {
    const lobbyEl = document.getElementById("lobby-view");
    if (!lobbyEl) return;

    // Nếu người dùng bấm tab "Phương pháp bấm máy Casio" trên Taskbar -> Hiển thị mở sẵn toàn bộ 6 phương pháp
    if (state.topTab === "casio") {
      let casioCardsHtml = "";
      CASIO_METHODS.forEach((m) => {
        casioCardsHtml += `
          <div class="casio-open-card">
            <h4>${m.title}</h4>
            ${m.content}
          </div>
        `;
      });

      lobbyEl.innerHTML = `
        <div class="casio-page-panel" id="casio-page-panel">
          <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 12px; border-bottom: 1px solid var(--border-color); padding-bottom: 14px;">
            <div>
              <div class="section-heading" style="margin-bottom: 4px;">
                6 PHƯƠNG PHÁP BẤM MÁY CASIO CỐ ĐỊNH (ÁP DỤNG CHO CẢ 4 CHƯƠNG)
              </div>
              <p style="font-size: 13.5px; color: var(--text-secondary);">
                Toàn bộ các bài bấm máy được trong 4 chương chỉ dùng cố định 6 phương pháp chuẩn dưới đây. Luôn để máy ở chế độ <b>Radian</b> (<code>SHIFT</code> + <code>MENU</code> + <code>2</code> + <code>2</code>).
              </p>
            </div>
            <button type="button" class="btn-launch-primary" id="btn-back-to-exams-tab">
              Quay lại Danh sách đề thi
            </button>
          </div>

          <div class="casio-methods-grid">
            ${casioCardsHtml}
          </div>
        </div>
      `;

      document.getElementById("btn-back-to-exams-tab")?.addEventListener("click", () => {
        state.topTab = "exams";
        updateTopNavbar();
        renderLobbyView();
      });

      if (typeof window.renderMathInElement === "function") {
        const panel = document.getElementById("casio-page-panel");
        if (panel) {
          window.renderMathInElement(panel, {
            delimiters: [
              { left: "\\(", right: "\\)", display: false },
              { left: "$", right: "$", display: false }
            ],
            throwOnError: false
          });
        }
      }
      return;
    }

    // Chuẩn bị dữ liệu cho 5 khối: Khối Tự luyện & Đề tổng hợp + Khối Chương 1, 2, 3, 4
    const allDescriptors = getAllExamDescriptors();
    const fixedFullList = allDescriptors.filter((d) => d.category === "full");
    const customFullList = allDescriptors.filter((d) => d.category === "custom" && !d.chapter);

    const allBlocksData = [
      {
        key: "practice",
        title: "KHỐI TỰ LUYỆN & ĐỀ TỔNG HỢP 4 CHƯƠNG (40 CÂU - 50 PHÚT)",
        subtitle: "10 đề tổng hợp bao quát toàn bộ 4 chương + các bài tự luyện ngẫu nhiên bạn đã làm",
        fixedList: fixedFullList,
        customList: customFullList,
        randomBtnId: "random_full",
        randomBtnLabel: "Chọn đề tự luyện ngẫu nhiên 40 câu"
      },
      {
        key: "ch1",
        title: "KHỐI CHƯƠNG 1: GIỚI HẠN & SỰ LIÊN TỤC CỦA HÀM SỐ (20 CÂU - 35 PHÚT)",
        subtitle: "Đề luyện tập trọng tâm Chương 1 (Giới hạn hàm số, VCB tương đương, Hàm số liên tục)",
        fixedList: allDescriptors.filter((d) => d.category === "chapter" && d.chapter === 1),
        customList: allDescriptors.filter((d) => d.category === "custom" && d.chapter === 1),
        randomBtnId: "random_ch_1",
        randomBtnLabel: "Chọn đề tự luyện Chương 1 (20 câu)"
      },
      {
        key: "ch2",
        title: "KHỐI CHƯƠNG 2: ĐẠO HÀM, VI PHÂN & KHAI TRIỂN TAYLOR - L'HOSPITAL (20 CÂU - 35 PHÚT)",
        subtitle: "Đề luyện tập trọng tâm Chương 2 (Đạo hàm cấp 1, cấp cao, Vi phân, Hàm tham số, L'Hospital)",
        fixedList: allDescriptors.filter((d) => d.category === "chapter" && d.chapter === 2),
        customList: allDescriptors.filter((d) => d.category === "custom" && d.chapter === 2),
        randomBtnId: "random_ch_2",
        randomBtnLabel: "Chọn đề tự luyện Chương 2 (20 câu)"
      },
      {
        key: "ch3",
        title: "KHỐI CHƯƠNG 3: TÍCH PHÂN BẤT ĐỊNH, XÁC ĐỊNH & SUY RỘNG (20 CÂU - 35 PHÚT)",
        subtitle: "Đề luyện tập trọng tâm Chương 3 (Nguyên hàm, Tích phân xác định, Tích phân suy rộng loại 1 & 2)",
        fixedList: allDescriptors.filter((d) => d.category === "chapter" && d.chapter === 3),
        customList: allDescriptors.filter((d) => d.category === "custom" && d.chapter === 3),
        randomBtnId: "random_ch_3",
        randomBtnLabel: "Chọn đề tự luyện Chương 3 (20 câu)"
      },
      {
        key: "ch4",
        title: "KHỐI CHƯƠNG 4: LÝ THUYẾT CHUỖI SỐ & CHUỖI LŨY THỪA (20 CÂU - 35 PHÚT)",
        subtitle: "Đề luyện tập trọng tâm Chương 4 (Chuỗi số dương, Chuỗi đan dấu, Bán kính và miền hội tụ chuỗi hàm)",
        fixedList: allDescriptors.filter((d) => d.category === "chapter" && d.chapter === 4),
        customList: allDescriptors.filter((d) => d.category === "custom" && d.chapter === 4),
        randomBtnId: "random_ch_4",
        randomBtnLabel: "Chọn đề tự luyện Chương 4 (20 câu)"
      }
    ];

    const visibleBlocks =
      state.blockFilter === "all"
        ? allBlocksData
        : allBlocksData.filter((b) => b.key === state.blockFilter);

    const blocksHtml = visibleBlocks.map((b) => buildBlockSectionHtml(b)).join("");

    // Thông tin đề đang chọn ở thanh xác nhận Bắt đầu thi
    const selDesc = getExamDescriptor(state.selectedExamId);
    const selHist = state.completedHistory[state.selectedExamId];
    const selScoreNote = selHist
      ? ` | Điểm đã đạt: ${formatScore(selHist.score10)}/10 (${selHist.accuracy}%)`
      : " | Trạng thái: Chưa làm";

    // Ô 2: Thông số học tập & Lịch chuỗi ngày học
    const analytics = computeGlobalAnalytics();
    let chapterEvalRowsHtml = "";
    analytics.chapterEvaluations.forEach((ev) => {
      chapterEvalRowsHtml += `
        <div class="weakness-row">
          <span><b>${ev.name}</b></span>
          <span>${ev.accText} — <i>${ev.statusText}</i></span>
        </div>
      `;
    });

    const calendarHtml = buildStreakCalendarHtml();

    lobbyEl.innerHTML = `
      <!-- Hàng Tab chọn nhanh từng khối -->
      <div class="portal-category-tabs">
        <button type="button" class="portal-tab-btn ${state.blockFilter === "all" ? "active" : ""}" data-block-tab="all">
          TẤT CẢ CÁC KHỐI (5 KHỐI)
        </button>
        <button type="button" class="portal-tab-btn ${state.blockFilter === "practice" ? "active" : ""}" data-block-tab="practice">
          KHỐI TỰ LUYỆN & ĐỀ TỔNG HỢP
        </button>
        <button type="button" class="portal-tab-btn ${state.blockFilter === "ch1" ? "active" : ""}" data-block-tab="ch1">
          KHỐI CHƯƠNG 1
        </button>
        <button type="button" class="portal-tab-btn ${state.blockFilter === "ch2" ? "active" : ""}" data-block-tab="ch2">
          KHỐI CHƯƠNG 2
        </button>
        <button type="button" class="portal-tab-btn ${state.blockFilter === "ch3" ? "active" : ""}" data-block-tab="ch3">
          KHỐI CHƯƠNG 3
        </button>
        <button type="button" class="portal-tab-btn ${state.blockFilter === "ch4" ? "active" : ""}" data-block-tab="ch4">
          KHỐI CHƯƠNG 4
        </button>
      </div>

      <!-- Giao diện 2 Ô lớn -->
      <div class="lobby-two-columns">
        <!-- Ô 1: CÁC KHỐI ĐỀ THI (MỖI KHỐI CÓ THANH TIẾN ĐỘ RIÊNG) -->
        <div>
          <!-- Khung xác nhận Đề đang chọn & Nút Bắt đầu thi -->
          <div class="selected-launch-bar">
            <div class="selected-launch-info">
              <h4>Đề đang chọn: ${selDesc.title}</h4>
              <p>Số câu: ${selDesc.questionCount} câu | Thời gian: ${selDesc.durationMinutes} phút${selScoreNote}</p>
            </div>
            <button type="button" class="btn-launch-primary" id="btn-start-exam-top">
              Bắt đầu thi (Tính giờ)
            </button>
          </div>

          <!-- Danh sách từng khối đề thi -->
          <div class="exam-blocks-stack">
            ${blocksHtml}
          </div>
        </div>

        <!-- Ô 2: THÔNG SỐ ĐÁNH GIÁ NĂNG LỰC & LỊCH CHUỖI NGÀY HỌC -->
        <div class="right-column-stack">
          <div class="lobby-panel">
            <div class="section-heading">THÔNG SỐ & ĐÁNH GIÁ NĂNG LỰC</div>
            <div class="stats-overview-grid">
              <div class="stat-metric-box">
                <div class="stat-metric-label">Điểm trung bình</div>
                <div class="stat-metric-value">${formatScore(analytics.avgScore)} / 10,00</div>
              </div>
              <div class="stat-metric-box">
                <div class="stat-metric-label">Độ chính xác trung bình</div>
                <div class="stat-metric-value">${analytics.avgAccuracy}%</div>
              </div>
              <div class="stat-metric-box">
                <div class="stat-metric-label">Đề cố định đã làm / Chưa làm</div>
                <div class="stat-metric-value">${analytics.fixedDoneCount} / ${analytics.fixedRemainingCount}</div>
              </div>
              <div class="stat-metric-box">
                <div class="stat-metric-label">Bài tự luyện đã làm</div>
                <div class="stat-metric-value">${analytics.customCount} bài</div>
              </div>
            </div>

            <div class="weakness-analysis-box">
              <div style="margin-bottom: 8px; font-weight: 700; color: var(--val-red);">
                Phần kiến thức còn yếu / Cần ưu tiên: ${analytics.weakSummary}
              </div>
              ${chapterEvalRowsHtml}
            </div>
          </div>

          <div class="lobby-panel">
            <div class="section-heading">LỊCH HỌC TẬP & CHUỖI NGÀY LUYỆN ĐỀ</div>
            ${calendarHtml}
          </div>
        </div>
      </div>
    `;

    bindLobbyEvents();
  }

  function buildStreakCalendarHtml() {
    const streakInfo = computeStreakInfo();
    const year = state.calYear;
    const month = state.calMonth; // 0..11

    const firstDay = new Date(year, month, 1);
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const startOffset = (firstDay.getDay() + 6) % 7;
    const todayKey = getTodayDateKey(new Date());

    const dayHeaders = ["T2", "T3", "T4", "T5", "T6", "T7", "CN"];
    let gridCellsHtml = dayHeaders.map((h) => `<div class="cal-day-head">${h}</div>`).join("");

    for (let i = 0; i < startOffset; i++) {
      gridCellsHtml += `<div class="cal-day-cell empty"></div>`;
    }

    for (let d = 1; d <= daysInMonth; d++) {
      const mStr = String(month + 1).padStart(2, "0");
      const dStr = String(d).padStart(2, "0");
      const dateKey = `${year}-${mStr}-${dStr}`;
      const count = state.studyDays[dateKey] || 0;
      const isStudied = count > 0;
      const isToday = dateKey === todayKey;

      gridCellsHtml += `
        <div class="cal-day-cell ${isStudied ? "studied" : ""} ${isToday ? "today" : ""}" title="${dateKey}${isStudied ? `: Đã hoàn thành ${count} bài thi` : ""}">
          <span>${d}</span>
          ${isStudied ? `<span class="cal-check-mark">✓</span>` : ""}
        </div>
      `;
    }

    return `
      <div class="streak-summary-bar">
        <span>Chuỗi học liên tiếp: <b>${streakInfo.currentStreak} ngày</b></span>
        <span>|</span>
        <span>Tổng số ngày đã học: <b>${streakInfo.totalDays} ngày</b></span>
      </div>
      <div class="calendar-header-row">
        <button type="button" class="btn-card-outline" id="cal-prev-month" style="padding: 3px 10px;">&lt; Tháng trước</button>
        <span style="font-weight: 700; font-size: 14px;">Tháng ${month + 1} / ${year}</span>
        <button type="button" class="btn-card-outline" id="cal-next-month" style="padding: 3px 10px;">Tháng sau &gt;</button>
      </div>
      <div class="calendar-grid">
        ${gridCellsHtml}
      </div>
      <div style="margin-top: 8px; font-size: 12px; color: var(--text-muted);">
        Hôm nào bạn hoàn thành bài thi, hệ thống sẽ tự động tích dấu (✓) vào ngày đó trên lịch.
      </div>
    `;
  }

  function bindLobbyEvents() {
    const lobbyEl = document.getElementById("lobby-view");
    if (!lobbyEl) return;

    // Chọn tab lọc khối
    lobbyEl.querySelectorAll("[data-block-tab]").forEach((btn) => {
      btn.addEventListener("click", () => {
        state.blockFilter = btn.getAttribute("data-block-tab");
        renderLobbyView();
      });
    });

    // Nút chọn đề tự luyện ngẫu nhiên trên từng khối
    lobbyEl.querySelectorAll("[data-pick-random-id]").forEach((btn) => {
      btn.addEventListener("click", () => {
        state.selectedExamId = btn.getAttribute("data-pick-random-id");
        renderLobbyView();
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    });

    // Bấm vào thẻ bài thi để chọn đề (chưa tính giờ)
    lobbyEl.querySelectorAll("[data-select-card-btn]").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        state.selectedExamId = btn.getAttribute("data-select-card-btn");
        renderLobbyView();
      });
    });

    lobbyEl.querySelectorAll("[data-card-exam-id]").forEach((card) => {
      card.addEventListener("click", () => {
        state.selectedExamId = card.getAttribute("data-card-exam-id");
        renderLobbyView();
      });
    });

    // Nút Bắt đầu thi ngay trên thẻ đang chọn
    lobbyEl.querySelectorAll("[data-start-card-btn]").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        const exId = btn.getAttribute("data-start-card-btn");
        launchExam(exId);
      });
    });

    // Xem đáp án của đề đã làm
    lobbyEl.querySelectorAll("[data-review-saved-btn]").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        const exId = btn.getAttribute("data-review-saved-btn");
        reviewSavedExam(exId);
      });
    });

    // Nút Bắt đầu thi (Tính giờ) trên thanh chọn đề
    document.getElementById("btn-start-exam-top")?.addEventListener("click", () => {
      launchExam(state.selectedExamId);
    });

    // Điều hướng tháng trên lịch
    document.getElementById("cal-prev-month")?.addEventListener("click", () => {
      state.calMonth -= 1;
      if (state.calMonth < 0) {
        state.calMonth = 11;
        state.calYear -= 1;
      }
      renderLobbyView();
    });

    document.getElementById("cal-next-month")?.addEventListener("click", () => {
      state.calMonth += 1;
      if (state.calMonth > 11) {
        state.calMonth = 0;
        state.calYear += 1;
      }
      renderLobbyView();
    });
  }

  // ============================================================================
  // RENDER PHÒNG THI & KẾT QUẢ & XEM ĐÁP ÁN CHUẨN MOODLE (BẢNG CÂU HỎI THOÁNG RỘNG)
  // ============================================================================
  function renderSidebar() {
    const grid = document.getElementById("qn-buttons-grid");
    const linksWrap = document.getElementById("quiz-nav-links");
    if (!grid || !linksWrap) return;

    let gridHtml = "";
    state.questions.forEach((q, idx) => {
      const userAns = state.userAnswers[idx];
      const isAnswered = userAns !== undefined;
      const isFlagged = !!state.flagged[idx];
      const isCurrent = state.singlePageMode && state.currentSingleIndex === idx;

      let statusClass = "";
      let statusSymbol = "";

      if (state.mode === "taking") {
        if (isAnswered) statusClass = "answered";
      } else {
        if (userAns === q.correct) {
          statusClass = "correct";
          statusSymbol = "✓";
        } else {
          statusClass = "incorrect";
          statusSymbol = "✗";
        }
      }

      const flagClass = isFlagged ? "flagged" : "";
      const focusClass = isCurrent ? "current-focus" : "";

      gridHtml += `
        <div class="qnbutton ${statusClass} ${flagClass} ${focusClass}" data-qidx="${idx}" title="Câu hỏi ${idx + 1}">
          <div class="qnbutton-num">${idx + 1}</div>
          <div class="qnbutton-status">${statusSymbol}</div>
        </div>
      `;
    });
    grid.innerHTML = gridHtml;

    grid.querySelectorAll(".qnbutton").forEach((btn) => {
      btn.addEventListener("click", () => {
        const idx = parseInt(btn.getAttribute("data-qidx"), 10);
        if (state.mode === "submitted") {
          state.mode = "review";
          state.reviewFilter = "all";
          if (state.singlePageMode) state.currentSingleIndex = idx;
          renderAll();
          setTimeout(() => scrollToQuestion(idx), 50);
          return;
        }
        if (state.singlePageMode) {
          state.currentSingleIndex = idx;
          renderMainContent();
          renderSidebar();
        } else {
          scrollToQuestion(idx);
        }
      });
    });

    const togglePageText = state.singlePageMode
      ? "Hiển thị tất cả trên một trang"
      : "Hiển thị từng trang một";

    let linksHtml = `<button type="button" class="quiz-nav-link" id="toggle-page-mode-btn">${togglePageText}</button>`;

    if (state.mode === "taking") {
      const answeredCount = Object.keys(state.userAnswers).length;
      linksHtml += `
        <div class="sidebar-status-box">
          <div class="sidebar-status-row">
            <span>Đã trả lời:</span>
            <b>${answeredCount} / ${state.questions.length}</b>
          </div>
          <div class="sidebar-status-row">
            <span>Thời gian còn:</span>
            <b id="sidebar-timer-text">${formatCountdown(state.remainingSec)}</b>
          </div>
        </div>
        <button type="button" class="sidebar-submit-btn" id="sidebar-submit-btn">Nộp bài và kết thúc</button>
        <button type="button" class="sidebar-exit-btn" id="sidebar-exit-btn">Thoát đề thi</button>
      `;
    } else if (state.mode === "submitted") {
      linksHtml += `
        <button type="button" class="sidebar-submit-btn" id="sidebar-view-review-btn" style="background-color: var(--moodle-green);">
          Xem đáp án chi tiết
        </button>
        <button type="button" class="quiz-nav-link" id="sidebar-open-methods-btn">
          Xem Phương pháp bấm máy Casio
        </button>
        <button type="button" class="quiz-nav-link" id="sidebar-back-lobby-btn">Quay về màn hình chính</button>
      `;
    } else if (state.mode === "review") {
      linksHtml += `
        <button type="button" class="quiz-nav-link" id="finish-review-link">Hoàn thành việc xem lại</button>
        <button type="button" class="quiz-nav-link" id="sidebar-open-methods-btn">
          Xem Phương pháp bấm máy Casio
        </button>
        <button type="button" class="quiz-nav-link" id="sidebar-back-lobby-btn">Quay về màn hình chính</button>
      `;
    }

    linksWrap.innerHTML = linksHtml;

    document.getElementById("toggle-page-mode-btn")?.addEventListener("click", () => {
      state.singlePageMode = !state.singlePageMode;
      renderAll();
    });
    document.getElementById("sidebar-submit-btn")?.addEventListener("click", () => submitExam(false));
    document.getElementById("sidebar-exit-btn")?.addEventListener("click", () => goToLobby("exams"));
    document.getElementById("sidebar-view-review-btn")?.addEventListener("click", () => enterReviewMode());
    document.getElementById("sidebar-open-methods-btn")?.addEventListener("click", () => openMethodsModal());
    document.getElementById("finish-review-link")?.addEventListener("click", () => {
      state.mode = "submitted";
      renderAll();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
    document.getElementById("sidebar-back-lobby-btn")?.addEventListener("click", () => goToLobby("exams"));
  }

  function scrollToQuestion(idx) {
    const el = document.getElementById(`question-block-${idx}`);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  function renderMainContent() {
    const main = document.getElementById("moodle-main");
    if (!main) return;

    const breadcrumbHtml = `
      <nav class="moodle-breadcrumb">
        <a href="javascript:void(0)" id="bc-home">${state.courseCode}</a>
        <span class="sep">/</span>
        <a href="javascript:void(0)" id="bc-sub">Ôn tập Giải tích 1</a>
        <span class="sep">/</span>
        <span class="current">${state.currentExamTitle}</span>
      </nav>
      <div class="moodle-page-header">
        <h1 class="moodle-page-title">${state.currentExamTitle}</h1>
      </div>
    `;

    if (state.mode === "submitted") {
      const stats = computeStats();
      let chapterCards = "";
      [1, 2, 3, 4].forEach((ch) => {
        const cStat = stats.byChapter[ch];
        if (cStat.total > 0) {
          chapterCards += `
            <div class="chapter-stat-box">
              <div class="chapter-stat-title">${CHAPTER_NAMES[ch]}</div>
              <div class="chapter-stat-val">${cStat.correct} / ${cStat.total} câu đúng</div>
            </div>
          `;
        }
      });

      main.innerHTML = `
        ${breadcrumbHtml}
        <div class="submitted-summary-card">
          <h2 style="font-size: 19px; margin-bottom: 14px;">Hoàn thành bài thi</h2>
          <div class="submitted-score-banner">
            <div>
              <div class="score-big-number">${formatScore(stats.score10)} / 10,00 (${stats.percent}%)</div>
              <div class="score-sub-label">Số câu đúng: <b>${stats.correctCount} / ${stats.total}</b> câu | Thời gian làm bài: <b>${formatDuration(state.elapsedSec)}</b></div>
            </div>
            <div>
              <button type="button" class="btn-view-answers" id="btn-open-review">
                Xem đáp án chi tiết
              </button>
            </div>
          </div>

          <table class="quizreviewsummary" style="margin-bottom: 18px;">
            <tbody>
              <tr>
                <th class="cell" scope="row">Trạng thái</th>
                <td class="cell">Đã xong</td>
              </tr>
              <tr>
                <th class="cell" scope="row">Bắt đầu vào lúc</th>
                <td class="cell">${formatMoodleDate(state.startTime)}</td>
              </tr>
              <tr>
                <th class="cell" scope="row">Kết thúc lúc</th>
                <td class="cell">${formatMoodleDate(state.endTime)}</td>
              </tr>
              <tr>
                <th class="cell" scope="row">Thời gian thực hiện</th>
                <td class="cell">${formatDuration(state.elapsedSec)}</td>
              </tr>
              <tr>
                <th class="cell" scope="row">Điểm</th>
                <td class="cell"><b>${formatScore(stats.score10)}</b> trên 10,00 (<b>${stats.percent}%</b>)</td>
              </tr>
            </tbody>
          </table>

          <h3 style="font-size: 14.5px; color: var(--text-secondary); margin-bottom: 6px;">Kết quả theo chương:</h3>
          <div class="chapter-breakdown-grid">
            ${chapterCards}
          </div>

          <div class="submitted-actions-row">
            <button type="button" class="btn-view-answers" id="btn-open-review-bottom">
              Xem đáp án
            </button>
            <button type="button" class="btn-primary-moodle" id="btn-open-methods-submitted">
              Phương pháp bấm máy Casio
            </button>
            <button type="button" class="btn-secondary-moodle" id="btn-back-lobby-submitted">
              Về màn hình chính
            </button>
            <button type="button" class="btn-secondary-moodle" id="btn-retake-exam">
              Làm lại đề này
            </button>
          </div>
        </div>
      `;

      document.getElementById("bc-home")?.addEventListener("click", () => goToLobby("exams"));
      document.getElementById("bc-sub")?.addEventListener("click", () => goToLobby("exams"));
      document.getElementById("btn-open-review")?.addEventListener("click", enterReviewMode);
      document.getElementById("btn-open-review-bottom")?.addEventListener("click", enterReviewMode);
      document.getElementById("btn-open-methods-submitted")?.addEventListener("click", openMethodsModal);
      document.getElementById("btn-back-lobby-submitted")?.addEventListener("click", () => goToLobby("exams"));
      document.getElementById("btn-retake-exam")?.addEventListener("click", () => launchExam(state.currentExamId));
      return;
    }

    let topSummaryHtml = "";
    if (state.mode === "review") {
      const stats = computeStats();
      const wrongCount = stats.total - stats.correctCount;
      const flaggedCount = Object.values(state.flagged).filter(Boolean).length;

      topSummaryHtml = `
        <table class="quizreviewsummary">
          <tbody>
            <tr>
              <th class="cell" scope="row">Trạng thái</th>
              <td class="cell">Đã xong</td>
            </tr>
            <tr>
              <th class="cell" scope="row">Bắt đầu vào lúc</th>
              <td class="cell">${formatMoodleDate(state.startTime)}</td>
            </tr>
            <tr>
              <th class="cell" scope="row">Kết thúc lúc</th>
              <td class="cell">${formatMoodleDate(state.endTime)}</td>
            </tr>
            <tr>
              <th class="cell" scope="row">Thời gian thực hiện</th>
              <td class="cell">${formatDuration(state.elapsedSec)}</td>
            </tr>
            <tr>
              <th class="cell" scope="row">Điểm</th>
              <td class="cell"><b>${formatScore(stats.score10)}</b> trên 10,00 (<b>${stats.percent}%</b>)</td>
            </tr>
          </tbody>
        </table>

        <div class="review-filter-bar">
          <div class="filter-btn-group">
            <span style="font-size: 13px; font-weight: 600;">Hiển thị:</span>
            <button type="button" class="filter-chip ${state.reviewFilter === "all" ? "active" : ""}" data-filter="all">
              Tất cả (${stats.total})
            </button>
            <button type="button" class="filter-chip ${state.reviewFilter === "wrong" ? "active" : ""}" data-filter="wrong">
              Câu sai / Chưa làm (${wrongCount})
            </button>
            <button type="button" class="filter-chip ${state.reviewFilter === "correct" ? "active" : ""}" data-filter="correct">
              Câu đúng (${stats.correctCount})
            </button>
            <button type="button" class="filter-chip ${state.reviewFilter === "flagged" ? "active" : ""}" data-filter="flagged">
              Đã đặt cờ (${flaggedCount})
            </button>
          </div>
          <div style="display:flex; gap: 8px;">
            <button type="button" class="btn-secondary-moodle" id="btn-open-methods-review" style="padding: 4px 12px; font-size: 13px;">
              Phương pháp bấm máy Casio
            </button>
            <button type="button" class="btn-secondary-moodle" id="btn-back-lobby-top" style="padding: 4px 12px; font-size: 13px;">
              Về màn hình chính
            </button>
          </div>
        </div>
      `;
    }

    let indicesToRender = [];
    if (state.singlePageMode) {
      indicesToRender = [state.currentSingleIndex];
    } else {
      state.questions.forEach((q, idx) => {
        if (state.mode === "review") {
          const isCorrect = state.userAnswers[idx] === q.correct;
          if (state.reviewFilter === "wrong" && isCorrect) return;
          if (state.reviewFilter === "correct" && !isCorrect) return;
          if (state.reviewFilter === "flagged" && !state.flagged[idx]) return;
        }
        indicesToRender.push(idx);
      });
    }

    const pointEach = state.questions.length > 0 ? 10 / state.questions.length : 0.25;
    let questionsHtml = "";
    if (indicesToRender.length === 0) {
      questionsHtml = `<div style="padding: 24px; background: var(--bg-subtle); border-radius: 4px; text-align: center; color: var(--text-muted);">
        Không có câu hỏi nào trong bộ lọc này.
      </div>`;
    } else {
      indicesToRender.forEach((idx) => {
        questionsHtml += buildQuestionBlockHtml(state.questions[idx], idx, pointEach);
      });
    }

    let bottomHtml = "";
    if (state.singlePageMode) {
      const hasPrev = state.currentSingleIndex > 0;
      const hasNext = state.currentSingleIndex < state.questions.length - 1;
      bottomHtml += `
        <div class="bottom-actions">
          <div>
            ${hasPrev ? `<button type="button" class="btn-secondary-moodle" id="btn-prev-q">Câu trước</button>` : ""}
          </div>
          <div style="display:flex; gap: 10px;">
            ${hasNext ? `<button type="button" class="btn-primary-moodle" id="btn-next-q">Câu tiếp theo</button>` : ""}
            ${state.mode === "taking" ? `<button type="button" class="btn-primary-moodle" style="background:var(--moodle-green)" id="btn-submit-bottom">Nộp bài và kết thúc</button>` : ""}
            ${state.mode === "review" ? `<button type="button" class="btn-secondary-moodle" id="btn-finish-review-bottom">Hoàn thành việc xem lại</button>` : ""}
          </div>
        </div>
      `;
    } else {
      if (state.mode === "taking") {
        bottomHtml = `
          <div class="bottom-actions">
            <div style="color: var(--text-secondary); font-size: 14px;">
              Đã trả lời: <b>${Object.keys(state.userAnswers).length} / ${state.questions.length}</b> câu hỏi
            </div>
            <div style="display:flex; gap: 10px;">
              <button type="button" class="btn-secondary-moodle" id="btn-exit-bottom">
                Thoát đề thi
              </button>
              <button type="button" class="btn-primary-moodle" id="btn-submit-bottom">
                Nộp bài và kết thúc
              </button>
            </div>
          </div>
        `;
      } else if (state.mode === "review") {
        bottomHtml = `
          <div class="bottom-actions">
            <button type="button" class="btn-secondary-moodle" id="btn-finish-review-bottom">
              Quay lại bảng điểm
            </button>
            <div style="display:flex; gap: 10px;">
              <button type="button" class="btn-secondary-moodle" id="btn-back-lobby-bottom">
                Về màn hình chính
              </button>
              <button type="button" class="btn-primary-moodle" id="btn-retake-bottom">
                Làm lại đề này
              </button>
            </div>
          </div>
        `;
      }
    }

    main.innerHTML = breadcrumbHtml + topSummaryHtml + questionsHtml + bottomHtml;
    bindMainEvents();
    renderMath();
  }

  function buildQuestionBlockHtml(q, idx, pointEach) {
    const userAns = state.userAnswers[idx];
    const isAnswered = userAns !== undefined;
    const isFlagged = !!state.flagged[idx];
    const isReview = state.mode === "review";
    const isCorrect = userAns === q.correct;
    const ptStr = formatScore(pointEach);

    let stateText = "";
    let stateClass = "";
    let gradeText = "";

    if (!isReview) {
      stateText = isAnswered ? "Đã lưu câu trả lời" : "Chưa trả lời";
      gradeText = `Đạt điểm ${ptStr}`;
    } else {
      if (isCorrect) {
        stateText = "Đúng";
        stateClass = "state-correct";
        gradeText = `Đạt điểm ${ptStr} trên ${ptStr}`;
      } else if (isAnswered) {
        stateText = "Sai";
        stateClass = "state-incorrect";
        gradeText = `Đạt điểm 0,00 trên ${ptStr}`;
      } else {
        stateText = "Chưa trả lời";
        stateClass = "state-incorrect";
        gradeText = `Đạt điểm 0,00 trên ${ptStr}`;
      }
    }

    let optionsHtml = "";
    q.options.forEach((optText, optIdx) => {
      const checkedAttr = userAns === optIdx ? "checked" : "";
      const disabledAttr = isReview ? "disabled" : "";
      let optRowClass = "";
      let markHtml = "";

      if (isReview) {
        if (userAns === optIdx && optIdx === q.correct) {
          optRowClass = "opt-correct-selected";
          markHtml = `<span class="feedback-mark mark-correct" title="Đúng">✓</span>`;
        } else if (userAns === optIdx && optIdx !== q.correct) {
          optRowClass = "opt-wrong-selected";
          markHtml = `<span class="feedback-mark mark-incorrect" title="Sai">✗</span>`;
        } else if (optIdx === q.correct) {
          optRowClass = "opt-correct-unselected";
          markHtml = `<span class="feedback-mark mark-correct" title="Đáp án đúng">✓</span>`;
        }
      }

      optionsHtml += `
        <label class="r-option ${optRowClass}" data-qidx="${idx}" data-optidx="${optIdx}">
          <input type="radio" name="q_radio_${idx}" value="${optIdx}" ${checkedAttr} ${disabledAttr}>
          <span class="answernumber">${LETTERS[optIdx]}.</span>
          <span class="option-text">${optText}</span>
          ${markHtml}
        </label>
      `;
    });

    const clearChoiceHtml =
      !isReview && isAnswered
        ? `<div class="clear-choice-wrap"><button type="button" class="clear-choice-btn" data-clear-qidx="${idx}">Xóa lựa chọn</button></div>`
        : "";

    let outcomeHtml = "";
    if (isReview) {
      const rightOptText = q.options[q.correct];
      outcomeHtml = `
        <div class="outcome">
          <div class="rightanswer">
            The correct answer is: ${rightOptText}
          </div>
          <div class="solution-container">
            <div class="solution-explain">
              <b>Lời giải chi tiết (${q.source}):</b><br>
              ${q.explanation}
            </div>
            ${
              q.casio_tip
                ? `<div class="solution-casio">
                    ${q.casio_tip}
                   </div>`
                : ""
            }
          </div>
        </div>
      `;
    }

    return `
      <div class="que ${isReview ? "review-mode" : ""}" id="question-block-${idx}">
        <div class="info">
          <div class="qno-title">Câu hỏi <span>${idx + 1}</span></div>
          <div class="state ${stateClass}" id="q-state-${idx}">${stateText}</div>
          <div class="grade">${gradeText}</div>
          <div class="questionflag ${isFlagged ? "is-flagged" : ""}" data-flag-qidx="${idx}">
            <span class="flag-label">${isFlagged ? "Bỏ đặt cờ" : "Đặt cờ"}</span>
          </div>
          <div class="chapter-tag">Chương ${q.chapter}</div>
        </div>
        <div class="content">
          <div class="formulation">
            <div class="qtext">${q.question}</div>
            <div class="ablock">
              <div class="prompt">Select one:</div>
              <div class="answer">
                ${optionsHtml}
              </div>
              ${clearChoiceHtml}
            </div>
          </div>
          ${outcomeHtml}
        </div>
      </div>
    `;
  }

  function bindMainEvents() {
    document.getElementById("bc-home")?.addEventListener("click", () => goToLobby("exams"));
    document.getElementById("bc-sub")?.addEventListener("click", () => goToLobby("exams"));

    if (state.mode === "taking") {
      document.querySelectorAll(".r-option input[type='radio']").forEach((radio) => {
        radio.addEventListener("change", (e) => {
          const label = e.target.closest(".r-option");
          const qIdx = parseInt(label.getAttribute("data-qidx"), 10);
          const optIdx = parseInt(label.getAttribute("data-optidx"), 10);
          state.userAnswers[qIdx] = optIdx;

          const stateEl = document.getElementById(`q-state-${qIdx}`);
          if (stateEl) stateEl.textContent = "Đã lưu câu trả lời";
          renderSidebar();

          const qBlock = document.getElementById(`question-block-${qIdx}`);
          if (qBlock && !qBlock.querySelector(".clear-choice-btn")) {
            const ablock = qBlock.querySelector(".ablock");
            if (ablock) {
              const wrap = document.createElement("div");
              wrap.className = "clear-choice-wrap";
              wrap.innerHTML = `<button type="button" class="clear-choice-btn" data-clear-qidx="${qIdx}">Xóa lựa chọn</button>`;
              ablock.appendChild(wrap);
              wrap.querySelector(".clear-choice-btn").addEventListener("click", () => clearChoice(qIdx));
            }
          }
        });
      });

      document.querySelectorAll(".clear-choice-btn").forEach((btn) => {
        btn.addEventListener("click", () => {
          const qIdx = parseInt(btn.getAttribute("data-clear-qidx"), 10);
          clearChoice(qIdx);
        });
      });
    }

    document.querySelectorAll(".questionflag").forEach((flagEl) => {
      flagEl.addEventListener("click", () => {
        const qIdx = parseInt(flagEl.getAttribute("data-flag-qidx"), 10);
        state.flagged[qIdx] = !state.flagged[qIdx];
        flagEl.classList.toggle("is-flagged", state.flagged[qIdx]);
        const label = flagEl.querySelector(".flag-label");
        if (label) label.textContent = state.flagged[qIdx] ? "Bỏ đặt cờ" : "Đặt cờ";
        renderSidebar();
      });
    });

    document.querySelectorAll(".filter-chip").forEach((chip) => {
      chip.addEventListener("click", () => {
        state.reviewFilter = chip.getAttribute("data-filter");
        renderMainContent();
      });
    });

    document.getElementById("btn-prev-q")?.addEventListener("click", () => {
      if (state.currentSingleIndex > 0) {
        state.currentSingleIndex -= 1;
        renderMainContent();
        renderSidebar();
      }
    });
    document.getElementById("btn-next-q")?.addEventListener("click", () => {
      if (state.currentSingleIndex < state.questions.length - 1) {
        state.currentSingleIndex += 1;
        renderMainContent();
        renderSidebar();
      }
    });

    document.getElementById("btn-submit-bottom")?.addEventListener("click", () => submitExam(false));
    document.getElementById("btn-exit-bottom")?.addEventListener("click", () => goToLobby("exams"));
    document.getElementById("btn-finish-review-bottom")?.addEventListener("click", () => {
      state.mode = "submitted";
      renderAll();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
    document.getElementById("btn-retake-bottom")?.addEventListener("click", () => launchExam(state.currentExamId));
    document.getElementById("btn-back-lobby-top")?.addEventListener("click", () => goToLobby("exams"));
    document.getElementById("btn-back-lobby-bottom")?.addEventListener("click", () => goToLobby("exams"));
    document.getElementById("btn-open-methods-review")?.addEventListener("click", openMethodsModal);
  }

  function clearChoice(qIdx) {
    delete state.userAnswers[qIdx];
    const qBlock = document.getElementById(`question-block-${qIdx}`);
    if (qBlock) {
      qBlock.querySelectorAll("input[type='radio']").forEach((r) => (r.checked = false));
      qBlock.querySelector(".clear-choice-wrap")?.remove();
      const stateEl = document.getElementById(`q-state-${qIdx}`);
      if (stateEl) stateEl.textContent = "Chưa trả lời";
    }
    renderSidebar();
  }

  function renderMath() {
    if (typeof window.renderMathInElement === "function") {
      window.renderMathInElement(document.getElementById("moodle-main"), {
        delimiters: [
          { left: "$$", right: "$$", display: true },
          { left: "\\[", right: "\\]", display: true },
          { left: "\\(", right: "\\)", display: false },
          { left: "$", right: "$", display: false }
        ],
        throwOnError: false
      });
    }
  }

  function openMethodsModal() {
    const modal = document.getElementById("casio-modal");
    const body = document.getElementById("modal-methods-body");
    if (!modal || !body) return;

    let html = `
      <p style="margin-bottom: 14px; color: var(--text-secondary); font-size: 14px;">
        Để tránh quá tải kiến thức, toàn bộ các câu bấm máy được trong 4 chương chỉ quy về <b>6 phương pháp cố định</b> dưới đây (luôn để máy ở chế độ <b>Radian</b>: <code>SHIFT</code> + <code>MENU</code> + <code>2</code> + <code>2</code>):
      </p>
    `;
    CASIO_METHODS.forEach((m) => {
      html += `
        <div class="method-card">
          <h4>${m.title}</h4>
          ${m.content}
        </div>
      `;
    });
    body.innerHTML = html;
    modal.classList.add("open");

    if (typeof window.renderMathInElement === "function") {
      window.renderMathInElement(body, {
        delimiters: [
          { left: "\\(", right: "\\)", display: false },
          { left: "$", right: "$", display: false }
        ],
        throwOnError: false
      });
    }
  }

  function renderAll() {
    applyTheme();
    updateTopNavbar();
    const lobbyView = document.getElementById("lobby-view");
    const examRoomView = document.getElementById("exam-room-view");

    if (state.mode === "lobby") {
      if (lobbyView) lobbyView.style.display = "block";
      if (examRoomView) examRoomView.style.display = "none";
      renderLobbyView();
    } else {
      if (lobbyView) lobbyView.style.display = "none";
      if (examRoomView) examRoomView.style.display = "flex";
      renderSidebar();
      renderMainContent();
    }
  }

  function initGlobalUI() {
    const sidebar = document.getElementById("moodle-sidebar");
    const toggleBtn = document.getElementById("sidebar-toggle-btn");
    if (toggleBtn && sidebar) {
      toggleBtn.addEventListener("click", () => {
        sidebar.classList.toggle("collapsed");
      });
    }

    document.getElementById("nav-home-btn")?.addEventListener("click", () => {
      goToLobby("exams");
    });

    document.getElementById("nav-casio-btn")?.addEventListener("click", () => {
      if (state.mode === "lobby") {
        state.topTab = "casio";
        updateTopNavbar();
        renderLobbyView();
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else if (state.mode !== "taking") {
        openMethodsModal();
      }
    });

    document.getElementById("theme-toggle-btn")?.addEventListener("click", () => {
      state.darkMode = !state.darkMode;
      saveJson(STORAGE_KEYS.DARK_MODE, state.darkMode);
      applyTheme();
    });

    const modal = document.getElementById("casio-modal");
    const closeModalBtn = document.getElementById("close-casio-modal-btn");
    if (closeModalBtn && modal) {
      closeModalBtn.addEventListener("click", () => modal.classList.remove("open"));
    }
    if (modal) {
      modal.addEventListener("click", (e) => {
        if (e.target === modal) modal.classList.remove("open");
      });
    }
  }

  window.addEventListener("DOMContentLoaded", () => {
    initGlobalUI();
    renderAll();
  });
})();
