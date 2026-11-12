// Dữ liệu ngân hàng câu hỏi Giải tích 1 (185 câu trọng tâm) + 6 Đề tổng hợp (40 câu/50p) + 11 Đề theo chương (20 câu/35p)
window.QUESTION_BANK = [
  {
    "id": "C1_01",
    "chapter": 1,
    "source": "Chương 1 - Câu 1",
    "question": "Tìm giới hạn \\(\\lim_{x\\to 0}\\left(\\frac{x-1}{x^2-1}\\right)^{x+1}\\)",
    "options": [
      "1.",
      "2.",
      "0.",
      "\\(\\frac{1}{4}\\)."
    ],
    "correct": 0,
    "explanation": "Khi \\(x \\to 0\\), biểu thức cơ số \\(\\frac{x-1}{x^2-1} \\to \\frac{-1}{-1} = 1\\) và số mũ \\(x+1 \\to 1\\) (không phải dạng vô định). Do đó giới hạn bằng \\(1^1 = 1\\).",
    "casio_tip": "<b>Phương pháp CALC chuẩn:</b> Nhập \\(\\left(\\frac{X-1}{X^2-1}\\right)^{X+1}\\), bấm <code>CALC</code> \\(X = 10^{-5}\\) \\(\\Rightarrow\\) Kết quả hiện \\(1,00001 \\approx 1\\)."
  },
  {
    "id": "C1_02",
    "chapter": 1,
    "source": "Chương 1 - Câu 2",
    "question": "Tìm các giới hạn \\(L_1 = \\lim_{x\\to 0^+}\\frac{1}{1+e^{\\frac{1}{x}}}\\) và \\(L_2 = \\lim_{x\\to 0^-}\\frac{1}{1+e^{\\frac{1}{x}}}\\)",
    "options": [
      "\\(L_1 = \\frac{3}{2}\\) và \\(L_2 = \\frac{1}{3}\\).",
      "\\(L_1 = 0\\) và \\(L_2 = 1\\).",
      "\\(L_1 = \\frac{1}{2}\\) và \\(L_2 = 1\\).",
      "\\(L_1 = 1\\) và \\(L_2 = \\frac{1}{2}\\)."
    ],
    "correct": 1,
    "explanation": "Khi \\(x \\to 0^+ \\Rightarrow \\frac{1}{x} \\to +\\infty \\Rightarrow e^{\\frac{1}{x}} \\to +\\infty \\Rightarrow L_1 = 0\\).<br>Khi \\(x \\to 0^- \\Rightarrow \\frac{1}{x} \\to -\\infty \\Rightarrow e^{\\frac{1}{x}} \\to 0 \\Rightarrow L_2 = \\frac{1}{1+0} = 1\\).",
    "casio_tip": "<b>Phương pháp CALC chuẩn:</b> Nhập \\(\\frac{1}{1+e^{1/X}}\\).<br>• Tính \\(L_1\\) (\\(x \\to 0^+\\)): Bấm <code>CALC</code> \\(X = 0,01\\) (vì có hàm mũ nên lấy \\(0,01\\) tránh tràn số) \\(\\Rightarrow L_1 \\approx 0\\).<br>• Tính \\(L_2\\) (\\(x \\to 0^-\\)): Bấm <code>CALC</code> \\(X = -0,01\\) \\(\\Rightarrow L_2 = 1\\)."
  },
  {
    "id": "C1_03",
    "chapter": 1,
    "source": "Chương 1 - Câu 3",
    "question": "Tìm các giới hạn \\(L_1 = \\lim_{x\\to 0^+}\\left(\\frac{1}{1+2^{\\frac{1}{x}}} + \\frac{\\sin x}{x}\\right)\\) và \\(L_2 = \\lim_{x\\to 0^-}\\left(\\frac{1}{1+2^{\\frac{1}{x}}} + \\frac{\\sin x}{x}\\right)\\)",
    "options": [
      "\\(L_1 = -\\infty, L_2 = 2\\).",
      "\\(L_1 = 2, L_2 = +\\infty\\).",
      "\\(L_1 = 1, L_2 = 2\\).",
      "\\(L_1 = 2, L_2 = 1\\)."
    ],
    "correct": 2,
    "explanation": "Ta có \\(\\lim_{x\\to 0}\\frac{\\sin x}{x} = 1\\).<br>• Khi \\(x \\to 0^+ \\Rightarrow 2^{\\frac{1}{x}} \\to +\\infty \\Rightarrow \\frac{1}{1+2^{1/x}} \\to 0 \\Rightarrow L_1 = 0 + 1 = 1\\).<br>• Khi \\(x \\to 0^- \\Rightarrow 2^{\\frac{1}{x}} \\to 0 \\Rightarrow \\frac{1}{1+2^{1/x}} \\to 1 \\Rightarrow L_2 = 1 + 1 = 2\\).",
    "casio_tip": "<b>Phương pháp CALC chuẩn:</b> Để máy ở chế độ Radian (<code>Rad</code>), nhập biểu thức:<br>• <code>CALC</code> \\(X = 0,01 \\Rightarrow L_1 \\approx 1\\).<br>• <code>CALC</code> \\(X = -0,01 \\Rightarrow L_2 \\approx 2\\)."
  },
  {
    "id": "C1_04",
    "chapter": 1,
    "source": "Chương 1 - Câu 4",
    "question": "Tìm các giới hạn \\(L_1 = \\lim_{x\\to +\\infty}\\left(\\frac{1+2^x}{2+3^x} + \\frac{\\sin x}{x}\\right)\\) và \\(L_2 = \\lim_{x\\to -\\infty}\\left(\\frac{1+2^x}{2+3^x} + \\frac{\\sin x}{x}\\right)\\)",
    "options": [
      "\\(L_1 = \\frac{1}{2}, L_2 = 0\\).",
      "\\(L_1 = \\frac{3}{2}, L_2 = \\frac{1}{3}\\).",
      "\\(L_1 = 0, L_2 = 1\\).",
      "\\(L_1 = 0, L_2 = \\frac{1}{2}\\)."
    ],
    "correct": 3,
    "explanation": "Khi \\(x \\to \\pm\\infty\\), \\(\\frac{\\sin x}{x} \\to 0\\) (hàm bị chặn chia cho vô cùng lớn).<br>• Khi \\(x \\to +\\infty\\): \\(\\frac{1+2^x}{2+3^x} = \\frac{3^{-x}+(2/3)^x}{2\\cdot 3^{-x}+1} \\to 0 \\Rightarrow L_1 = 0\\).<br>• Khi \\(x \\to -\\infty\\): \\(2^x \\to 0, 3^x \\to 0 \\Rightarrow \\frac{1+2^x}{2+3^x} \\to \\frac{1}{2} \\Rightarrow L_2 = \\frac{1}{2}\\).",
    "casio_tip": "<b>Phương pháp CALC chuẩn:</b> Có hàm mũ \\(2^x, 3^x\\) nên khi \\(x \\to \\pm\\infty\\) ta thay \\(X = \\pm 50\\):<br>• <code>CALC</code> \\(X = 50 \\Rightarrow L_1 \\approx 0\\).<br>• <code>CALC</code> \\(X = -50 \\Rightarrow L_2 \\approx 0,5 = \\frac{1}{2}\\)."
  },
  {
    "id": "C1_05",
    "chapter": 1,
    "source": "Chương 1 - Câu 5",
    "question": "Tìm các giới hạn \\(L_1 = \\lim_{x\\to +\\infty}\\left(\\frac{1+7^x}{2+5^x} + x\\sin\\frac{1}{x}\\right)\\) và \\(L_2 = \\lim_{x\\to -\\infty}\\left(\\frac{1+7^x}{2+5^x} + x\\sin\\frac{1}{x}\\right)\\)",
    "options": [
      "\\(L_1 = \\frac{1}{2}, L_2 = 0\\).",
      "\\(L_1 = +\\infty, L_2 = \\frac{3}{2}\\).",
      "\\(L_1 = \\frac{3}{2}, L_2 = +\\infty\\).",
      "\\(L_1 = 1, L_2 = \\frac{1}{2}\\)."
    ],
    "correct": 1,
    "explanation": "Khi \\(x \\to \\pm\\infty\\), đặt \\(t = \\frac{1}{x} \\to 0 \\Rightarrow x\\sin\\frac{1}{x} = \\frac{\\sin t}{t} \\to 1\\).<br>• Khi \\(x \\to +\\infty\\): \\(\\frac{1+7^x}{2+5^x} \\sim \\left(\\frac{7}{5}\\right)^x \\to +\\infty \\Rightarrow L_1 = +\\infty\\).<br>• Khi \\(x \\to -\\infty\\): \\(7^x \\to 0, 5^x \\to 0 \\Rightarrow \\frac{1+7^x}{2+5^x} \\to \\frac{1}{2} \\Rightarrow L_2 = \\frac{1}{2} + 1 = \\frac{3}{2}\\).",
    "casio_tip": "<b>Phương pháp CALC chuẩn:</b> Nhập biểu thức (chế độ <code>Rad</code>):<br>• <code>CALC</code> \\(X = 50 \\Rightarrow\\) Kết quả rất lớn (\\(\\approx 1,79\\times 10^7\\)) \\(\\Rightarrow L_1 = +\\infty\\).<br>• <code>CALC</code> \\(X = -50 \\Rightarrow L_2 \\approx 1,5 = \\frac{3}{2}\\)."
  },
  {
    "id": "C1_06",
    "chapter": 1,
    "source": "Chương 1 - Câu 6",
    "question": "Tìm các giới hạn \\(L_1 = \\lim_{x\\to 0^+}\\left(1 + e^{\\frac{1}{x}} + x\\arctan\\frac{1}{x}\\right)\\) và \\(L_2 = \\lim_{x\\to 0^-}\\left(1 + e^{\\frac{1}{x}} + x\\arctan\\frac{1}{x}\\right)\\)",
    "options": [
      "\\(L_1 = \\frac{1}{2}, L_2 = 0\\).",
      "\\(L_1 = +\\infty, L_2 = \\frac{3}{2}\\).",
      "\\(L_1 = 1, L_2 = +\\infty\\).",
      "\\(L_1 = +\\infty, L_2 = 1\\)."
    ],
    "correct": 3,
    "explanation": "Khi \\(x \\to 0\\), do \\(\\left|\\arctan\\frac{1}{x}\\right| \\le \\frac{\\pi}{2}\\) nên \\(x\\arctan\\frac{1}{x} \\to 0\\).<br>• Khi \\(x \\to 0^+ \\Rightarrow e^{1/x} \\to +\\infty \\Rightarrow L_1 = +\\infty\\).<br>• Khi \\(x \\to 0^- \\Rightarrow e^{1/x} \\to 0 \\Rightarrow L_2 = 1 + 0 + 0 = 1\\).",
    "casio_tip": "<b>Phương pháp CALC chuẩn:</b> Nhập biểu thức:<br>• <code>CALC</code> \\(X = 0,01 \\Rightarrow\\) số cực lớn (\\(\\approx 2,68\\times 10^{43}\\)) \\(\\Rightarrow L_1 = +\\infty\\).<br>• <code>CALC</code> \\(X = -0,0001 \\Rightarrow L_2 \\approx 0,9998 \\approx 1\\)."
  },
  {
    "id": "C1_07",
    "chapter": 1,
    "source": "Chương 1 - Câu 7",
    "question": "Tìm các giới hạn \\(L_1 = \\lim_{x\\to +\\infty}\\left(x - \\sqrt{x^2-2x}\\right)\\) và \\(L_2 = \\lim_{x\\to -\\infty}\\left(x - \\sqrt{x^2-2x}\\right)\\)",
    "options": [
      "\\(L_1 = \\frac{1}{2}, L_2 = 0\\).",
      "\\(L_1 = +\\infty, L_2 = \\frac{3}{2}\\).",
      "\\(L_1 = 1, L_2 = -\\infty\\).",
      "\\(L_1 = 1, L_2 = \\frac{1}{2}\\)."
    ],
    "correct": 2,
    "explanation": "• Khi \\(x \\to +\\infty\\): Nhân liên hợp \\(x - \\sqrt{x^2-2x} = \\frac{2x}{x + \\sqrt{x^2-2x}} = \\frac{2}{1 + \\sqrt{1-2/x}} \\to \\frac{2}{2} = 1 \\Rightarrow L_1 = 1\\).<br>• Khi \\(x \\to -\\infty\\): \\(x \\to -\\infty\\) và \\(-\\sqrt{x^2-2x} \\to -\\infty \\Rightarrow L_2 = -\\infty\\).",
    "casio_tip": "<b>Phương pháp CALC chuẩn:</b> Nhập \\(X - \\sqrt{X^2-2X}\\):<br>• <code>CALC</code> \\(X = 10^5 \\Rightarrow L_1 \\approx 1\\).<br>• <code>CALC</code> \\(X = -10^5 \\Rightarrow -200001 \\to -\\infty\\)."
  },
  {
    "id": "C1_08",
    "chapter": 1,
    "source": "Chương 1 - Câu 8",
    "question": "Tìm giới hạn \\(\\lim_{x\\to +\\infty}\\left(\\sqrt[3]{1-x^3} + x\\right)\\)",
    "options": [
      "0.",
      "1.",
      "2.",
      "\\(+\\infty\\)."
    ],
    "correct": 0,
    "explanation": "Nhân liên hợp bậc 3: \\(\\sqrt[3]{1-x^3} + x = \\frac{(1-x^3) + x^3}{\\sqrt[3]{(1-x^3)^2} - x\\sqrt[3]{1-x^3} + x^2} = \\frac{1}{\\text{Mẫu bậc } 2} \\to 0\\) khi \\(x \\to +\\infty\\).",
    "casio_tip": "<b>Phương pháp CALC chuẩn:</b> Nhập \\(\\sqrt[3]{1-X^3} + X\\), bấm <code>CALC</code> \\(X = 10^4 \\Rightarrow\\) Kết quả \\(\\approx 0\\)."
  },
  {
    "id": "C1_09",
    "chapter": 1,
    "source": "Chương 1 - Câu 9",
    "question": "Tìm giới hạn \\(\\lim_{x\\to +\\infty}\\left(\\sqrt[3]{x^3+3x} - \\sqrt{x^2-2x}\\right)\\)",
    "options": [
      "1.",
      "2.",
      "3.",
      "0."
    ],
    "correct": 0,
    "explanation": "Tách thêm bớt \\(x\\): \\(\\lim_{x\\to +\\infty}\\left(\\sqrt[3]{x^3+3x} - x\\right) + \\lim_{x\\to +\\infty}\\left(x - \\sqrt{x^2-2x}\\right) = 0 + 1 = 1\\).",
    "casio_tip": "<b>Phương pháp CALC chuẩn:</b> Nhập \\(\\sqrt[3]{X^3+3X} - \\sqrt{X^2-2X}\\), bấm <code>CALC</code> \\(X = 10^5 \\Rightarrow\\) Kết quả \\(\\approx 1\\)."
  },
  {
    "id": "C1_10",
    "chapter": 1,
    "source": "Chương 1 - Câu 10",
    "question": "Tìm giới hạn \\(\\lim_{x\\to \\pm\\infty}\\left(\\frac{x^2-2x+1}{x^2+4x+5}\\right)^x\\)",
    "options": [
      "\\(e^3\\).",
      "\\(e^4\\).",
      "1.",
      "\\(e^{-6}\\)."
    ],
    "correct": 3,
    "explanation": "Dạng vô định \\(1^\\infty\\): Áp dụng công thức \\(\\lim u^v = \\exp\\left[\\lim v(u-1)\\right]\\).<br>Ta có \\(\\lim_{x\\to\\pm\\infty} x\\left(\\frac{x^2-2x+1}{x^2+4x+5} - 1\\right) = \\lim_{x\\to\\pm\\infty}\\frac{-6x^2-4x}{x^2+4x+5} = -6\\). Vậy giới hạn bằng \\(e^{-6}\\).",
    "casio_tip": "<b>Phương pháp CALC chuẩn:</b> Nhập biểu thức, bấm <code>CALC</code> \\(X = 10^4 \\Rightarrow\\) Kết quả \\(\\approx 0,00247875 = e^{-6}\\)."
  },
  {
    "id": "C1_11",
    "chapter": 1,
    "source": "Chương 1 - Câu 11",
    "question": "Tìm giới hạn \\(\\lim_{x\\to 0}(1+\\sin x)^{\\frac{1}{x}}\\)",
    "options": [
      "\\(e^3\\).",
      "\\(e^4\\).",
      "\\(e\\).",
      "\\(\\sqrt[4]{e}\\)."
    ],
    "correct": 2,
    "explanation": "Dạng \\(1^\\infty\\): \\(\\lim_{x\\to 0}(1+\\sin x)^{\\frac{1}{x}} = \\exp\\left(\\lim_{x\\to 0}\\frac{\\sin x}{x}\\right) = e^1 = e\\).",
    "casio_tip": "<b>Phương pháp CALC chuẩn:</b> Để máy ở chế độ <code>Rad</code>, nhập \\((1+\\sin X)^{1/X}\\), bấm <code>CALC</code> \\(X = 10^{-5} \\Rightarrow \\approx 2,71828 = e\\)."
  },
  {
    "id": "C1_12",
    "chapter": 1,
    "source": "Chương 1 - Câu 12",
    "question": "Tìm giới hạn \\(\\lim_{x\\to 0}(\\cos x)^{\\cot^2 x}\\)",
    "options": [
      "\\(e^{-6}\\).",
      "\\(\\frac{1}{\\sqrt{e}}\\).",
      "\\(e^4\\).",
      "\\(\\sqrt[4]{e}\\)."
    ],
    "correct": 1,
    "explanation": "Dạng \\(1^\\infty\\): Số mũ của \\(e\\) là \\(\\lim_{x\\to 0}\\cot^2 x(\\cos x - 1) = \\lim_{x\\to 0}\\frac{-x^2/2}{x^2} = -\\frac{1}{2}\\).<br>Vậy giới hạn bằng \\(e^{-1/2} = \\frac{1}{\\sqrt{e}}\\).",
    "casio_tip": "<b>Phương pháp CALC chuẩn:</b> Nhập \\((\\cos X)^{1/\\tan^2 X}\\) (chế độ <code>Rad</code>), bấm <code>CALC</code> \\(X = 10^{-4} \\Rightarrow \\approx 0,60653 = \\frac{1}{\\sqrt{e}}\\)."
  },
  {
    "id": "C1_13",
    "chapter": 1,
    "source": "Chương 1 - Câu 13",
    "question": "Tìm giới hạn \\(\\lim_{x\\to 0}(\\cos 3x)^{\\frac{2}{x^2}}\\)",
    "options": [
      "\\(e^{-9}\\).",
      "\\(\\frac{1}{\\sqrt{e}}\\).",
      "\\(e^4\\).",
      "\\(\\sqrt[4]{e}\\)."
    ],
    "correct": 0,
    "explanation": "Dạng \\(1^\\infty\\): Số mũ của \\(e\\) là \\(\\lim_{x\\to 0}\\frac{2(\\cos 3x - 1)}{x^2} = \\lim_{x\\to 0}\\frac{2\\cdot\\left(-\\frac{(3x)^2}{2}\\right)}{x^2} = -9\\). Vậy giới hạn bằng \\(e^{-9}\\).",
    "casio_tip": "<b>Phương pháp CALC chuẩn:</b> Nhập \\((\\cos(3X))^{2/X^2}\\), bấm <code>CALC</code> \\(X = 10^{-3} \\Rightarrow \\approx 1,234\\times 10^{-4} = e^{-9}\\)."
  },
  {
    "id": "C1_14",
    "chapter": 1,
    "source": "Chương 1 - Câu 14",
    "question": "Tìm giới hạn \\(\\lim_{x\\to 0}(\\cos x + \\sin x)^{\\cot x}\\)",
    "options": [
      "\\(e^{-9}\\).",
      "\\(\\frac{1}{\\sqrt{e}}\\).",
      "\\(e\\).",
      "\\(\\sqrt[4]{e}\\)."
    ],
    "correct": 2,
    "explanation": "Dạng \\(1^\\infty\\): Số mũ của \\(e\\) là \\(\\lim_{x\\to 0}\\frac{\\cos x - 1 + \\sin x}{\\tan x} = \\lim_{x\\to 0}\\frac{-x^2/2 + x}{x} = 1\\). Vậy giới hạn bằng \\(e^1 = e\\).",
    "casio_tip": "<b>Phương pháp CALC chuẩn:</b> Nhập \\((\\cos X + \\sin X)^{1/\\tan X}\\), bấm <code>CALC</code> \\(X = 10^{-4} \\Rightarrow \\approx 2,71815 \\approx e\\)."
  },
  {
    "id": "C1_15",
    "chapter": 1,
    "source": "Chương 1 - Câu 15",
    "question": "Tìm giới hạn \\(\\lim_{x\\to 1}\\frac{\\sqrt[3]{x^2} - 2\\sqrt[3]{x} + 1}{(x-1)^2}\\)",
    "options": [
      "1.",
      "\\(\\frac{1}{9}\\).",
      "3.",
      "\\(\\frac{3}{2}\\)."
    ],
    "correct": 1,
    "explanation": "Đặt \\(t = \\sqrt[3]{x} \\Rightarrow x = t^3\\). Khi \\(x \\to 1 \\Rightarrow t \\to 1\\):<br>\\(\\lim_{t\\to 1}\\frac{(t-1)^2}{(t^3-1)^2} = \\lim_{t\\to 1}\\frac{1}{(t^2+t+1)^2} = \\frac{1}{3^2} = \\frac{1}{9}\\).",
    "casio_tip": "<b>Phương pháp CALC chuẩn:</b> Nhập biểu thức, bấm <code>CALC</code> \\(X = 1 + 10^{-4} \\Rightarrow \\approx 0,1111 = \\frac{1}{9}\\)."
  },
  {
    "id": "C1_16",
    "chapter": 1,
    "source": "Chương 1 - Câu 16",
    "question": "Tìm giới hạn \\(\\lim_{x\\to -\\infty}\\frac{\\ln(m+e^x)}{x}, m > 0\\)",
    "options": [
      "\\(m\\).",
      "\\(2m\\).",
      "\\(-m\\).",
      "0."
    ],
    "correct": 3,
    "explanation": "Khi \\(x \\to -\\infty \\Rightarrow e^x \\to 0 \\Rightarrow \\ln(m+e^x) \\to \\ln m\\) (hằng số), trong khi mẫu \\(x \\to -\\infty\\). Do đó giới hạn bằng \\(0\\).",
    "casio_tip": "<b>Phương pháp CALC chuẩn:</b> Chọn \\(m = 2\\), nhập \\(\\frac{\\ln(2+e^X)}{X}\\), bấm <code>CALC</code> \\(X = -100 \\Rightarrow \\approx -0,0069 \\to 0\\)."
  },
  {
    "id": "C1_17",
    "chapter": 1,
    "source": "Chương 1 - Câu 17",
    "question": "Tìm giới hạn \\(\\lim_{x\\to 0}\\frac{\\ln(1+\\tan^4 x)}{x^2\\sin^2 x}\\)",
    "options": [
      "1.",
      "2.",
      "3.",
      "\\(+\\infty\\)."
    ],
    "correct": 0,
    "explanation": "Khi \\(x \\to 0\\): \\(\\ln(1+\\tan^4 x) \\sim \\tan^4 x \\sim x^4\\) và mẫu \\(x^2\\sin^2 x \\sim x^4\\). Vậy giới hạn bằng \\(\\frac{x^4}{x^4} = 1\\).",
    "casio_tip": "<b>Phương pháp CALC chuẩn:</b> Nhập biểu thức (chế độ <code>Rad</code>), bấm <code>CALC</code> \\(X = 0,01 \\Rightarrow \\approx 1,00016 \\approx 1\\)."
  },
  {
    "id": "C1_18",
    "chapter": 1,
    "source": "Chương 1 - Câu 18",
    "question": "Tìm giới hạn \\(\\lim_{x\\to 0}\\frac{5^x - 4^x}{x^2+x}\\)",
    "options": [
      "\\(\\ln\\frac{5}{4}\\).",
      "\\(\\ln\\frac{4}{5}\\).",
      "\\(\\ln 5\\).",
      "\\(\\frac{3}{2}\\)."
    ],
    "correct": 0,
    "explanation": "Khi \\(x \\to 0\\): \\(5^x - 4^x = (5^x-1) - (4^x-1) \\sim x\\ln 5 - x\\ln 4 = x\\ln\\frac{5}{4}\\), mẫu \\(x^2+x \\sim x\\). Vậy giới hạn bằng \\(\\ln\\frac{5}{4}\\).",
    "casio_tip": "<b>Phương pháp CALC chuẩn:</b> Nhập biểu thức, bấm <code>CALC</code> \\(X = 10^{-5} \\Rightarrow \\approx 0,22314 = \\ln\\frac{5}{4}\\)."
  },
  {
    "id": "C1_19",
    "chapter": 1,
    "source": "Chương 1 - Câu 19",
    "question": "Tìm giới hạn \\(\\lim_{x\\to +\\infty} x^2\\left(e^{\\frac{1}{x}} - e^{\\frac{1}{x-1}}\\right)\\)",
    "options": [
      "1.",
      "\\(-1\\).",
      "2.",
      "0."
    ],
    "correct": 1,
    "explanation": "Ta có \\(e^{\\frac{1}{x}} - e^{\\frac{1}{x-1}} = e^{\\frac{1}{x-1}}\\left(e^{\\frac{1}{x} - \\frac{1}{x-1}} - 1\\right) \\sim 1 \\cdot \\left(\\frac{-1}{x(x-1)}\\right) \\sim -\\frac{1}{x^2}\\).<br>Nhân với \\(x^2\\) ta được giới hạn bằng \\(-1\\).",
    "casio_tip": "<b>Phương pháp CALC chuẩn:</b> Nhập biểu thức, bấm <code>CALC</code> \\(X = 10^3 \\Rightarrow \\approx -1,002 \\approx -1\\)."
  },
  {
    "id": "C1_20",
    "chapter": 1,
    "source": "Chương 1 - Câu 20",
    "question": "Tìm giới hạn \\(\\lim_{x\\to +\\infty}\\left(\\frac{x}{1+e^{\\frac{1}{x}}} - \\frac{x}{2}\\right)\\)",
    "options": [
      "1.",
      "2.",
      "\\(-\\frac{1}{4}\\).",
      "\\(\\frac{1}{4}\\)."
    ],
    "correct": 2,
    "explanation": "Đặt \\(t = \\frac{1}{x} \\to 0^+\\). Biểu thức trở thành \\(\\lim_{t\\to 0^+}\\frac{1-e^t}{2t(1+e^t)} = \\lim_{t\\to 0^+}\\frac{-t}{2t\\cdot 2} = -\\frac{1}{4}\\).",
    "casio_tip": "<b>Phương pháp CALC chuẩn:</b> Nhập biểu thức, bấm <code>CALC</code> \\(X = 10^4 \\Rightarrow \\approx -0,25 = -\\frac{1}{4}\\)."
  },
  {
    "id": "C1_21",
    "chapter": 1,
    "source": "Chương 1 - Câu 21",
    "question": "Tìm giới hạn \\(\\lim_{x\\to 0}\\frac{\\sqrt{1+x} - \\sqrt{1-x}}{\\sqrt[3]{1+x} - \\sqrt[3]{1-x}}\\)",
    "options": [
      "1.",
      "3.",
      "2.",
      "\\(\\frac{3}{2}\\)."
    ],
    "correct": 3,
    "explanation": "Khi \\(x \\to 0\\), dùng VCB tương đương \\(\\sqrt[n]{1+u} - 1 \\sim \\frac{u}{n}\\):<br>• Tử \\(= (\\sqrt{1+x}-1) - (\\sqrt{1-x}-1) \\sim \\frac{x}{2} - \\left(-\\frac{x}{2}\\right) = x\\).<br>• Mẫu \\(= (\\sqrt[3]{1+x}-1) - (\\sqrt[3]{1-x}-1) \\sim \\frac{x}{3} - \\left(-\\frac{x}{3}\\right) = \\frac{2}{3}x\\).<br>Vậy giới hạn bằng \\(\\frac{1}{2/3} = \\frac{3}{2}\\).",
    "casio_tip": "<b>Phương pháp CALC chuẩn:</b> Nhập biểu thức, bấm <code>CALC</code> \\(X = 10^{-5} \\Rightarrow 1,5 = \\frac{3}{2}\\)."
  },
  {
    "id": "C1_22",
    "chapter": 1,
    "source": "Chương 1 - Câu 22",
    "question": "Tìm giới hạn \\(\\lim_{x\\to +\\infty}\\frac{\\ln(m+e^x)}{x}, m > 0\\)",
    "options": [
      "\\(m\\).",
      "1.",
      "\\(-m\\).",
      "0."
    ],
    "correct": 1,
    "explanation": "Khi \\(x \\to +\\infty\\): \\(\\ln(m+e^x) = \\ln\\left[e^x(1+me^{-x})\\right] = x + \\ln(1+me^{-x}) \\sim x\\). Chia cho \\(x\\) được giới hạn bằng \\(1\\).",
    "casio_tip": "<b>Phương pháp CALC chuẩn:</b> Chọn \\(m = 2\\), nhập \\(\\frac{\\ln(2+e^X)}{X}\\), bấm <code>CALC</code> \\(X = 50 \\Rightarrow 1\\)."
  },
  {
    "id": "C1_23",
    "chapter": 1,
    "source": "Chương 1 - Câu 23",
    "question": "Tìm giới hạn \\(\\lim_{x\\to 1}\\frac{(1-\\sqrt{x})(1-\\sqrt[3]{x})\\cdots(1-\\sqrt[n]{x})}{(x-1)^{n-1}}, n \\ge 2\\)",
    "options": [
      "\\(\\frac{(-1)^{n-1}}{n!}\\).",
      "\\(\\frac{(-1)^n}{n!}\\).",
      "\\(\\frac{(-1)^{n+1}}{(n+1)!}\\).",
      "\\(\\frac{1}{n!}\\)."
    ],
    "correct": 0,
    "explanation": "Đặt \\(t = x - 1 \\to 0\\). Ta có \\(1 - \\sqrt[k]{1+t} \\sim -\\frac{t}{k} = \\frac{-(x-1)}{k}\\) với mọi \\(k = 2, 3, \\dots, n\\).<br>Trên tử có \\(n-1\\) thừa số nên tích tương đương với \\(\\frac{(-1)^{n-1}(x-1)^{n-1}}{2\\cdot 3\\cdots n} = \\frac{(-1)^{n-1}(x-1)^{n-1}}{n!}\\). Chia cho \\((x-1)^{n-1}\\) được \\(\\frac{(-1)^{n-1}}{n!}\\).",
    "casio_tip": "<b>Phương pháp CALC chuẩn:</b> Chọn \\(n = 2\\), đề bài trở thành \\(\\lim_{x\\to 1}\\frac{1-\\sqrt{x}}{x-1} = -\\frac{1}{2}\\). Thay \\(n = 2\\) vào 4 đáp án chỉ có A cho \\(\\frac{(-1)^1}{2!} = -\\frac{1}{2}\\)."
  },
  {
    "id": "C1_24",
    "chapter": 1,
    "source": "Chương 1 - Câu 24",
    "question": "Tìm giới hạn \\(\\lim_{x\\to 1}\\frac{x^{mx} - 1}{x\\ln x}\\)",
    "options": [
      "\\(2m\\).",
      "\\(m\\).",
      "\\(-m\\).",
      "\\(m+1\\)."
    ],
    "correct": 1,
    "explanation": "Khi \\(x \\to 1\\): \\(x^{mx} - 1 = e^{mx\\ln x} - 1 \\sim mx\\ln x\\). Chia cho \\(x\\ln x\\) ta được giới hạn bằng \\(m\\).",
    "casio_tip": "<b>Phương pháp CALC chuẩn:</b> Chọn \\(m = 3\\), nhập \\(\\frac{X^{3X}-1}{X\\ln X}\\), bấm <code>CALC</code> \\(X = 1 + 10^{-5} \\Rightarrow \\approx 3 = m\\)."
  },
  {
    "id": "C1_25",
    "chapter": 1,
    "source": "Chương 1 - Câu 25",
    "question": "Tìm giới hạn \\(\\lim_{x\\to 0}\\frac{x - \\sin 5x + \\sin^2 x}{4x + \\arcsin^2 x + x^2}\\)",
    "options": [
      "1.",
      "2.",
      "\\(-1\\).",
      "0."
    ],
    "correct": 2,
    "explanation": "Khi \\(x \\to 0\\), ngắt bỏ VCB bậc cao (\\(x^2\\)):<br>• Tử \\(\\sim x - 5x = -4x\\).<br>• Mẫu \\(\\sim 4x\\).<br>Vậy giới hạn bằng \\(\\frac{-4x}{4x} = -1\\).",
    "casio_tip": "<b>Phương pháp CALC chuẩn:</b> Nhập biểu thức (chế độ <code>Rad</code>), bấm <code>CALC</code> \\(X = 10^{-5} \\Rightarrow -1\\)."
  },
  {
    "id": "C1_26",
    "chapter": 1,
    "source": "Chương 1 - Câu 26",
    "question": "Cho \\(f(x) = 1 - \\cos x + \\ln(1+\\arctan^2 x) + \\arcsin^2 x\\). Khi \\(x \\to 0\\) thì",
    "options": [
      "\\(f(x) \\sim x\\).",
      "\\(f(x) \\sim \\frac{3x^2}{2}\\).",
      "\\(f(x) \\sim \\frac{5x^2}{2}\\).",
      "\\(f(x) \\sim -\\frac{x^2}{2}\\)."
    ],
    "correct": 2,
    "explanation": "Khi \\(x \\to 0\\): \\(1-\\cos x \\sim \\frac{x^2}{2}\\); \\(\\ln(1+\\arctan^2 x) \\sim \\arctan^2 x \\sim x^2\\); \\(\\arcsin^2 x \\sim x^2\\).<br>Cộng lại: \\(f(x) \\sim \\frac{x^2}{2} + x^2 + x^2 = \\frac{5x^2}{2}\\).",
    "casio_tip": "<b>Phương pháp VCB chuẩn:</b> Nhập \\(\\frac{f(X)}{X^2}\\), bấm <code>CALC</code> \\(X = 10^{-4} \\Rightarrow\\) Kết quả hiện \\(2,5 = \\frac{5}{2} \\Rightarrow f(x) \\sim \\frac{5x^2}{2}\\)."
  },
  {
    "id": "C1_27",
    "chapter": 1,
    "source": "Chương 1 - Câu 27",
    "question": "Cho \\(f(x) = \\ln(1+\\tan 3x) + (\\sqrt{1+2\\sin x} - 1)(\\arcsin 2x + x^2)\\). Khi \\(x \\to 0\\) thì",
    "options": [
      "\\(f(x) \\sim 3x\\).",
      "\\(f(x) \\sim \\frac{3x^2}{2}\\).",
      "\\(f(x) \\sim \\frac{5x^2}{2}\\).",
      "\\(f(x) \\sim -\\frac{x^2}{2}\\)."
    ],
    "correct": 0,
    "explanation": "Khi \\(x \\to 0\\): \\(\\ln(1+\\tan 3x) \\sim 3x\\) (bậc 1), còn \\((\\sqrt{1+2\\sin x}-1)(\\arcsin 2x+x^2) \\sim x\\cdot 2x = 2x^2\\) (bậc 2, bỏ qua so với bậc 1). Vậy \\(f(x) \\sim 3x\\).",
    "casio_tip": "<b>Phương pháp VCB chuẩn:</b> Nhập \\(\\frac{f(X)}{3X}\\), bấm <code>CALC</code> \\(X = 10^{-4} \\Rightarrow\\) Kết quả \\(\\approx 0,9996 \\approx 1 \\Rightarrow\\) Chọn A."
  },
  {
    "id": "C1_28",
    "chapter": 1,
    "source": "Chương 1 - Câu 28",
    "question": "Cho hàm số \\(y = f(x)\\) xác định bởi phương trình tham số \\(\\begin{cases} x = \\arctan t \\\\ y = \\frac{t^2}{2} \\end{cases}\\). Khi \\(x \\to 0\\) thì",
    "options": [
      "\\(f(x) \\sim -\\frac{x^2}{2}\\).",
      "\\(f(x) \\sim \\frac{x^2}{2}\\).",
      "\\(f(x) \\sim \\frac{3x^2}{2}\\).",
      "\\(f(x) \\sim \\frac{5x^2}{2}\\)."
    ],
    "correct": 1,
    "explanation": "Khi \\(x \\to 0 \\Rightarrow t = \\tan x \\sim x\\). Thay vào \\(y = \\frac{t^2}{2} \\sim \\frac{x^2}{2}\\).",
    "casio_tip": "<b>Phương pháp VCB chuẩn:</b> Từ \\(t = \\tan x \\Rightarrow f(x) = \\frac{\\tan^2 x}{2}\\). Nhập \\(\\frac{\\tan^2 X / 2}{X^2 / 2}\\), <code>CALC</code> \\(X = 10^{-4} \\Rightarrow 1\\)."
  },
  {
    "id": "C1_29",
    "chapter": 1,
    "source": "Chương 1 - Câu 29",
    "question": "Cho \\(f(x) = 1 - \\cos 2x + \\ln(1+\\tan^2 2x) + 2\\arcsin x\\). Khi \\(x \\to 0\\) thì",
    "options": [
      "\\(f(x) \\sim 2x\\).",
      "\\(f(x) \\sim \\frac{3x^2}{2}\\).",
      "\\(f(x) \\sim \\frac{5x^2}{2}\\).",
      "\\(f(x) \\sim -\\frac{x^2}{2}\\)."
    ],
    "correct": 0,
    "explanation": "Khi \\(x \\to 0\\): \\(1-\\cos 2x \\sim 2x^2\\); \\(\\ln(1+\\tan^2 2x) \\sim 4x^2\\); còn \\(2\\arcsin x \\sim 2x\\) (bậc 1 thấp nhất). Giữ lại VCB bậc thấp nhất ta được \\(f(x) \\sim 2x\\).",
    "casio_tip": "<b>Phương pháp VCB chuẩn:</b> Nhập \\(\\frac{f(X)}{2X}\\), bấm <code>CALC</code> \\(X = 10^{-4} \\Rightarrow \\approx 1,0003 \\approx 1 \\Rightarrow\\) Chọn A."
  },
  {
    "id": "C1_30",
    "chapter": 1,
    "source": "Chương 1 - Câu 30",
    "question": "Cho \\(f(x) = \\ln(1+x^2) + (\\sqrt{1+2x}-1)(\\arcsin 2x + x^2)\\). Khi \\(x \\to 0\\) thì",
    "options": [
      "\\(f(x) \\sim 3x^2\\).",
      "\\(f(x) \\sim \\frac{3x^2}{2}\\).",
      "\\(f(x) \\sim \\frac{5x^2}{2}\\).",
      "\\(f(x) \\sim -\\frac{x^2}{2}\\)."
    ],
    "correct": 0,
    "explanation": "Khi \\(x \\to 0\\): \\(\\ln(1+x^2) \\sim x^2\\) và \\((\\sqrt{1+2x}-1)(\\arcsin 2x+x^2) \\sim x \\cdot 2x = 2x^2\\). Cộng lại: \\(f(x) \\sim x^2 + 2x^2 = 3x^2\\).",
    "casio_tip": "<b>Phương pháp VCB chuẩn:</b> Nhập \\(\\frac{f(X)}{X^2}\\), bấm <code>CALC</code> \\(X = 10^{-4} \\Rightarrow \\approx 3 \\Rightarrow f(x) \\sim 3x^2\\)."
  },
  {
    "id": "C1_31",
    "chapter": 1,
    "source": "Chương 1 - Câu 31",
    "question": "Xác định \\(m\\) để hàm số \\(f(x) = \\begin{cases} \\frac{\\sin x}{x}, & \\text{nếu } x \\ne 0 \\\\ m, & \\text{nếu } x = 0 \\end{cases}\\) liên tục tại \\(x = 0\\).",
    "options": [
      "\\(m = 1\\).",
      "\\(m = 2\\).",
      "\\(m = 3\\).",
      "\\(m = 0\\)."
    ],
    "correct": 0,
    "explanation": "Hàm số liên tục tại \\(x = 0 \\Leftrightarrow m = f(0) = \\lim_{x\\to 0}\\frac{\\sin x}{x} = 1\\).",
    "casio_tip": "<b>Phương pháp Liên tục chuẩn:</b> Bấm <code>CALC</code> \\(\\frac{\\sin X}{X}\\) tại \\(X = 10^{-5} \\Rightarrow 1 \\Rightarrow m = 1\\)."
  },
  {
    "id": "C1_32",
    "chapter": 1,
    "source": "Chương 1 - Câu 32",
    "question": "Xác định \\(m\\) để hàm số \\(f(x) = \\begin{cases} \\frac{\\cos x}{x}, & \\text{nếu } x \\ne 0 \\\\ 1+2m, & \\text{nếu } x = 0 \\end{cases}\\) liên tục tại \\(x = 0\\).",
    "options": [
      "\\(m = 1\\).",
      "\\(m = 2\\).",
      "\\(m = 3\\).",
      "Không tồn tại \\(m\\)."
    ],
    "correct": 3,
    "explanation": "Khi \\(x \\to 0\\), \\(\\cos x \\to 1\\) và \\(x \\to 0\\) nên \\(\\lim_{x\\to 0}\\frac{\\cos x}{x} = \\infty\\) (không tồn tại giới hạn hữu hạn). Vậy không tồn tại \\(m\\).",
    "casio_tip": "<b>Phương pháp Liên tục chuẩn:</b> Bấm <code>CALC</code> \\(\\frac{\\cos X}{X}\\) tại \\(X = 10^{-5} \\Rightarrow 100000\\) (tiến ra vô cùng) \\(\\Rightarrow\\) Không tồn tại \\(m\\)."
  },
  {
    "id": "C1_33",
    "chapter": 1,
    "source": "Chương 1 - Câu 33",
    "question": "Xác định \\(m\\) để hàm số \\(f(x) = \\begin{cases} \\arctan\\frac{1}{(x-1)^2}, & \\text{nếu } x < 1 \\\\ \\frac{x^2+3x+m}{x^2+1}, & \\text{nếu } x \\ge 1 \\end{cases}\\) liên tục tại \\(x = 1\\).",
    "options": [
      "\\(m = 1\\).",
      "\\(m = 2\\).",
      "\\(m = \\pi - 4\\).",
      "\\(m = -\\pi - 4\\)."
    ],
    "correct": 2,
    "explanation": "Ta có \\(\\lim_{x\\to 1^-} f(x) = \\lim_{x\\to 1^-}\\arctan\\frac{1}{(x-1)^2} = \\arctan(+\\infty) = \\frac{\\pi}{2}\\).<br>Mặt khác \\(f(1) = \\frac{1+3+m}{1+1} = \\frac{4+m}{2}\\).<br>Để hàm liên tục tại \\(x = 1\\): \\(\\frac{4+m}{2} = \\frac{\\pi}{2} \\Leftrightarrow m = \\pi - 4\\).",
    "casio_tip": "<b>Phương pháp Liên tục chuẩn:</b> <code>CALC</code> nhánh trên tại \\(X = 1 - 10^{-5}\\) được \\(\\approx 1,5708 = \\frac{\\pi}{2}\\). Giải \\(\\frac{4+m}{2} = \\frac{\\pi}{2} \\Rightarrow m = \\pi - 4\\)."
  },
  {
    "id": "C1_34",
    "chapter": 1,
    "source": "Chương 1 - Câu 34",
    "question": "Xác định \\(m\\) để hàm số \\(f(x) = \\begin{cases} \\frac{x\\sin x + 2\\tan^2 x}{x^2}, & \\text{nếu } x < 0 \\\\ \\cos^2 x + 2m, & \\text{nếu } x \\ge 0 \\end{cases}\\) liên tục tại \\(x = 0\\).",
    "options": [
      "\\(m = 0\\).",
      "\\(m = 1\\).",
      "\\(m = 2\\).",
      "\\(m = 3\\)."
    ],
    "correct": 1,
    "explanation": "Ta có \\(\\lim_{x\\to 0^-} f(x) = \\lim_{x\\to 0^-}\\frac{x^2 + 2x^2}{x^2} = 3\\).<br>Mặt khác \\(f(0) = \\cos^2 0 + 2m = 1 + 2m\\).<br>Để hàm số liên tục: \\(1 + 2m = 3 \\Leftrightarrow m = 1\\).",
    "casio_tip": "<b>Phương pháp Liên tục chuẩn:</b> <code>CALC</code> nhánh trên tại \\(X = -10^{-4}\\) được \\(3\\). Cho \\(1 + 2m = 3 \\Rightarrow m = 1\\)."
  },
  {
    "id": "C1_35",
    "chapter": 1,
    "source": "Chương 1 - Câu 35",
    "question": "Xác định \\(m\\) để hàm số \\(f(x) = \\begin{cases} \\frac{x\\arcsin x}{\\ln(1+x^2)}, & \\text{nếu } x \\in (-1;1)\\setminus\\{0\\} \\\\ 1+3m, & \\text{nếu } x = 0 \\end{cases}\\) liên tục tại \\(x = 0\\).",
    "options": [
      "\\(m = 0\\).",
      "\\(m = 1\\).",
      "\\(m = 2\\).",
      "\\(m = 3\\)."
    ],
    "correct": 0,
    "explanation": "Khi \\(x \\to 0\\): \\(\\frac{x\\arcsin x}{\\ln(1+x^2)} \\sim \\frac{x\\cdot x}{x^2} = 1\\).<br>Để hàm số liên tục tại \\(x = 0\\): \\(1 + 3m = 1 \\Leftrightarrow m = 0\\).",
    "casio_tip": "<b>Phương pháp Liên tục chuẩn:</b> <code>CALC</code> nhánh trên tại \\(X = 10^{-4}\\) được \\(1\\). Giải \\(1 + 3m = 1 \\Rightarrow m = 0\\)."
  },
  {
    "id": "C1_36",
    "chapter": 1,
    "source": "Chương 1 - Câu 36",
    "question": "Tìm \\(m\\) để hàm số \\(f(x) = \\begin{cases} \\arctan\\frac{1}{x-2}, & \\text{nếu } x \\ne 2 \\\\ 1+2m, & \\text{nếu } x = 2 \\end{cases}\\) liên tục tại \\(x = 2\\).",
    "options": [
      "\\(m = 1\\).",
      "\\(m = 2\\).",
      "\\(m = 3\\).",
      "Không tồn tại \\(m\\)."
    ],
    "correct": 3,
    "explanation": "Ta có \\(\\lim_{x\\to 2^+}\\arctan\\frac{1}{x-2} = \\frac{\\pi}{2}\\) nhưng \\(\\lim_{x\\to 2^-}\\arctan\\frac{1}{x-2} = -\\frac{\\pi}{2}\\). Vì giới hạn trái khác giới hạn phải nên không tồn tại \\(\\lim_{x\\to 2} f(x) \\Rightarrow\\) Không tồn tại \\(m\\).",
    "casio_tip": "<b>Phương pháp Liên tục chuẩn:</b> <code>CALC</code> tại \\(X = 2 + 10^{-5}\\) ra \\(1,57\\), còn tại \\(X = 2 - 10^{-5}\\) ra \\(-1,57\\) (hai phía khác nhau) \\(\\Rightarrow\\) Không tồn tại \\(m\\)."
  },
  {
    "id": "C1_37",
    "chapter": 1,
    "source": "Chương 1 - Câu 37",
    "question": "Tìm \\(m\\) để hàm số \\(f(x) = \\begin{cases} \\frac{\\ln(1+\\tan^4 x)}{x\\sin x}, & \\text{nếu } x \\in (-1;1)\\setminus\\{0\\} \\\\ m, & \\text{nếu } x = 0 \\end{cases}\\) liên tục tại \\(x = 0\\).",
    "options": [
      "\\(m = 1\\).",
      "\\(m = 2\\).",
      "\\(m = 0\\).",
      "Không tồn tại \\(m\\)."
    ],
    "correct": 2,
    "explanation": "Khi \\(x \\to 0\\): \\(\\frac{\\ln(1+\\tan^4 x)}{x\\sin x} \\sim \\frac{x^4}{x^2} = x^2 \\to 0\\). Do đó \\(m = 0\\).",
    "casio_tip": "<b>Phương pháp Liên tục chuẩn:</b> <code>CALC</code> nhánh trên tại \\(X = 10^{-3} \\Rightarrow 10^{-6} \\approx 0 \\Rightarrow m = 0\\)."
  },
  {
    "id": "C1_38",
    "chapter": 1,
    "source": "Chương 1 - Câu 38",
    "question": "Tìm \\(m\\) để \\(f(x) = \\begin{cases} \\frac{\\sqrt{2x+1} - \\cos x}{x}, & \\text{nếu } x \\in \\left(-\\frac{1}{2};+\\infty\\right)\\setminus\\{0\\} \\\\ m, & \\text{nếu } x = 0 \\end{cases}\\) liên tục tại \\(x = 0\\).",
    "options": [
      "\\(m = 0\\).",
      "\\(m = 1\\).",
      "\\(m = 2\\).",
      "Không tồn tại \\(m\\)."
    ],
    "correct": 1,
    "explanation": "Khi \\(x \\to 0\\): \\(\\frac{(\\sqrt{2x+1}-1) + (1-\\cos x)}{x} = \\frac{\\frac{2x}{2} + \\frac{x^2}{2} + o(x^2)}{x} \\to 1\\). Suy ra \\(m = 1\\).",
    "casio_tip": "<b>Phương pháp Liên tục chuẩn:</b> <code>CALC</code> nhánh trên tại \\(X = 10^{-5} \\Rightarrow 1 \\Rightarrow m = 1\\)."
  },
  {
    "id": "C2_02",
    "chapter": 2,
    "source": "Chương 2 - Câu 2",
    "question": "Tính đạo hàm của hàm số \\(f(x) = \\frac{e^x}{\\sin x}\\).",
    "options": [
      "\\(f'(x) = \\frac{e^x(\\sin x - \\cos x)}{\\sin^2 x}\\).",
      "\\(f'(x) = \\frac{e^x(\\sin x + \\cos x)}{\\sin^2 x}\\).",
      "\\(f'(x) = \\frac{e^x(-\\sin x + \\cos x)}{\\sin^2 x}\\).",
      "\\(f'(x) = \\frac{e^x}{\\cos x}\\)."
    ],
    "correct": 0,
    "explanation": "Áp dụng quy tắc đạo hàm thương \\(\\left(\\frac{u}{v}\\right)' = \\frac{u'v - uv'}{v^2}\\):<br>\\(f'(x) = \\frac{e^x\\sin x - e^x\\cos x}{\\sin^2 x} = \\frac{e^x(\\sin x - \\cos x)}{\\sin^2 x}\\).",
    "casio_tip": "<b>Phương pháp d/dx chuẩn:</b> Bấm \\(\\left.\\frac{d}{dx}\\left(\\frac{e^X}{\\sin X}\\right)\\right|_{X=1,5} \\approx 4,179\\). Thay \\(X = 1,5\\) vào 4 đáp án chỉ có A ra \\(4,179\\)."
  },
  {
    "id": "C2_03",
    "chapter": 2,
    "source": "Chương 2 - Câu 3",
    "question": "Tính đạo hàm của hàm số \\(f(x) = (1+x)^x, x > 1\\).",
    "options": [
      "\\(f'(x) = (1+x)^x\\left[\\ln(1+x) + \\frac{x}{x+1}\\right]\\).",
      "\\(f'(x) = (1+x)^x\\left[\\ln(1+x) - \\frac{x}{x+1}\\right]\\).",
      "\\(f'(x) = \\ln(1+x) + \\frac{x}{x+1}\\).",
      "\\(f'(x) = \\ln(1+x) - \\frac{x}{x+1}\\)."
    ],
    "correct": 0,
    "explanation": "Lấy logarit tự nhiên: \\(\\ln f(x) = x\\ln(1+x)\\). Đạo hàm hai vế:<br>\\(\\frac{f'(x)}{f(x)} = \\ln(1+x) + \\frac{x}{x+1} \\Rightarrow f'(x) = (1+x)^x\\left[\\ln(1+x) + \\frac{x}{x+1}\\right]\\).",
    "casio_tip": "<b>Phương pháp d/dx chuẩn:</b> Bấm \\(\\left.\\frac{d}{dx}\\left((1+X)^X\\right)\\right|_{X=2} \\approx 15,89\\). Thay \\(X = 2\\) vào 4 đáp án chỉ có A ra \\(15,89\\)."
  },
  {
    "id": "C2_04",
    "chapter": 2,
    "source": "Chương 2 - Câu 4",
    "question": "Tính đạo hàm cấp \\(n\\) của hàm số \\(y = e^{-3x}\\).",
    "options": [
      "\\(y^{(n)}(x) = (-3)^n e^{3x}\\).",
      "\\(y^{(n)}(x) = (-3)^{n+1} e^{-3x}\\).",
      "\\(y^{(n)}(x) = (-3)^{n-1} e^{-3x}\\).",
      "\\(y^{(n)}(x) = (-3)^n e^{-3x}\\)."
    ],
    "correct": 3,
    "explanation": "Ta có \\(y' = -3e^{-3x}, y'' = (-3)^2 e^{-3x}, \\dots\\) Bằng quy nạp suy ra \\(y^{(n)}(x) = (-3)^n e^{-3x}\\).",
    "casio_tip": "<b>Phương pháp d/dx chuẩn:</b> Cho \\(n = 1, X = 1\\). Bấm \\(\\left.\\frac{d}{dx}(e^{-3X})\\right|_{X=1} = -3e^{-3} \\approx -0,14936\\). Thay \\(n = 1, X = 1\\) vào các đáp án chỉ có D khớp."
  },
  {
    "id": "C2_05",
    "chapter": 2,
    "source": "Chương 2 - Câu 5",
    "question": "Tính đạo hàm cấp \\(n\\) của hàm số \\(f(x) = \\ln|x+2|\\).",
    "options": [
      "\\(f^{(n)}(x) = \\frac{(-1)^n n!}{(x+2)^n}\\).",
      "\\(f^{(n)}(x) = \\frac{(-1)^n (n-1)!}{(x+2)^n}\\).",
      "\\(f^{(n)}(x) = \\frac{(-1)^{n-1} (n-1)!}{(x+2)^n}\\).",
      "\\(f^{(n)}(x) = \\frac{(-1)^{n-1} (n+1)!}{(x+2)^n}\\)."
    ],
    "correct": 2,
    "explanation": "Ta có \\(f'(x) = \\frac{1}{x+2}, f''(x) = \\frac{-1}{(x+2)^2}, f'''(x) = \\frac{(-1)^2 2!}{(x+2)^3}\\).<br>Công thức tổng quát: \\(f^{(n)}(x) = \\frac{(-1)^{n-1}(n-1)!}{(x+2)^n}\\).",
    "casio_tip": "<b>Phương pháp d/dx chuẩn:</b> Cho \\(n = 1\\), đạo hàm bậc 1 là \\(f'(x) = \\frac{1}{x+2}\\). Thay \\(n = 1\\) vào 4 đáp án (lưu ý \\(0! = 1\\)) chỉ có C cho \\(\\frac{(-1)^0 \\cdot 0!}{x+2} = \\frac{1}{x+2}\\)."
  },
  {
    "id": "C2_06",
    "chapter": 2,
    "source": "Chương 2 - Câu 6",
    "question": "Tính đạo hàm cấp \\(n\\) của hàm số \\(f(x) = \\ln|x^2-3x+2|\\).",
    "options": [
      "\\(f^{(n)}(x) = (-1)^n (n-1)!\\left[\\frac{1}{(x-1)^n} + \\frac{1}{(x-2)^n}\\right]\\).",
      "\\(f^{(n)}(x) = (-1)^{n-1} (n-1)!\\left[\\frac{1}{(x-1)^n} + \\frac{1}{(x-2)^n}\\right]\\).",
      "\\(f^{(n)}(x) = (-1)^{n-1} (n+1)!\\left[\\frac{1}{(x-1)^n} + \\frac{1}{(x-2)^n}\\right]\\).",
      "\\(f^{(n)}(x) = (-1)^{n-1} n!\\left[\\frac{1}{(x-1)^n} + \\frac{1}{(x-2)^n}\\right]\\)."
    ],
    "correct": 1,
    "explanation": "Phân tích \\(f(x) = \\ln|(x-1)(x-2)| = \\ln|x-1| + \\ln|x-2|\\).<br>Áp dụng công thức \\(\\left(\\ln|x-a|\\right)^{(n)} = \\frac{(-1)^{n-1}(n-1)!}{(x-a)^n}\\) ta được đáp án B.",
    "casio_tip": "<b>Phương pháp d/dx chuẩn:</b> Cho \\(n = 1, X = 3\\). Bấm \\(\\left.\\frac{d}{dx}(\\ln(X^2-3X+2))\\right|_{X=3} = 1,5\\). Thay \\(n = 1, X = 3\\) vào các đáp án chỉ có B cho \\((-1)^0 \\cdot 0!\\left(\\frac{1}{2} + 1\\right) = 1,5\\)."
  },
  {
    "id": "C2_07",
    "chapter": 2,
    "source": "Chương 2 - Câu 7",
    "question": "Tính \\(y' = \\frac{dy}{dx}\\) của hàm số \\(y = y(x)\\) cho bởi phương trình tham số \\(\\begin{cases} x = \\cos t \\\\ y = \\sin^2 t \\end{cases}, t \\in (0;\\pi)\\).",
    "options": [
      "\\(y' = 2\\sin t\\).",
      "\\(y' = 2\\sin t\\cos t\\).",
      "\\(y' = 2x\\).",
      "\\(y' = -2x\\)."
    ],
    "correct": 3,
    "explanation": "Ta có \\(y'_x = \\frac{y'_t}{x'_t} = \\frac{2\\sin t\\cos t}{-\\sin t} = -2\\cos t = -2x\\). (Hoặc khử tham số: \\(y = 1 - \\cos^2 t = 1 - x^2 \\Rightarrow y' = -2x\\)).",
    "casio_tip": "<b>Phương pháp Tham số chuẩn:</b> Chọn \\(t = 1\\), bấm \\(\\frac{\\left.\\frac{d}{dx}(\\sin^2 X)\\right|_{X=1}}{\\left.\\frac{d}{dx}(\\cos X)\\right|_{X=1}} \\approx -1,0806\\). Tại \\(t = 1\\) thì \\(x = \\cos 1 \\approx 0,5403 \\Rightarrow -2x \\approx -1,0806\\) (Đáp án D)."
  },
  {
    "id": "C2_08",
    "chapter": 2,
    "source": "Chương 2 - Câu 8",
    "question": "Tính \\(y'\\left(\\frac{\\pi}{3}\\right) = \\left.\\frac{dy}{dx}\\right|_{x=\\frac{\\pi}{3}}\\) của hàm \\(y = y(x)\\) cho bởi phương trình tham số \\(\\begin{cases} x = \\arctan t \\\\ y = \\frac{t^2}{2} \\end{cases}\\).",
    "options": [
      "\\(y'\\left(\\frac{\\pi}{3}\\right) = 4\\sqrt{3}\\).",
      "\\(y'\\left(\\frac{\\pi}{3}\\right) = 2\\sqrt{3}\\).",
      "\\(y'\\left(\\frac{\\pi}{3}\\right) = 3\\sqrt{3}\\).",
      "\\(y'\\left(\\frac{\\pi}{3}\\right) = 0\\)."
    ],
    "correct": 0,
    "explanation": "Tại \\(x = \\frac{\\pi}{3} \\Rightarrow \\arctan t = \\frac{\\pi}{3} \\Rightarrow t = \\sqrt{3}\\).<br>Ta có \\(y'_x = \\frac{y'_t}{x'_t} = \\frac{t}{\\frac{1}{1+t^2}} = t(1+t^2)\\). Thay \\(t = \\sqrt{3}\\) được \\(\\sqrt{3}(1+3) = 4\\sqrt{3}\\).",
    "casio_tip": "<b>Phương pháp Tham số chuẩn:</b> Từ \\(\\arctan t = \\frac{\\pi}{3} \\Rightarrow t = \\tan\\frac{\\pi}{3} = \\sqrt{3}\\). Bấm \\(\\frac{\\left.\\frac{d}{dx}(X^2/2)\\right|_{X=\\sqrt{3}}}{\\left.\\frac{d}{dx}(\\arctan X)\\right|_{X=\\sqrt{3}}} \\approx 6,9282 = 4\\sqrt{3}\\)."
  },
  {
    "id": "C2_09",
    "chapter": 2,
    "source": "Chương 2 - Câu 9",
    "question": "Tính \\(y' = \\frac{dy}{dx}\\) của hàm \\(y = y(x)\\) cho bởi phương trình tham số \\(\\begin{cases} x = \\arctan t \\\\ y = \\ln t \\end{cases}\\) với \\(t > 0\\).",
    "options": [
      "\\(y'(x) = \\frac{t}{1+t^2}\\).",
      "\\(y'(x) = -\\frac{1+t^2}{t}\\).",
      "\\(y'(x) = \\frac{1+t^2}{t}\\).",
      "\\(y'(x) = -\\frac{t}{1+t^2}\\)."
    ],
    "correct": 2,
    "explanation": "Ta có \\(y'_x = \\frac{y'_t}{x'_t} = \\frac{\\frac{1}{t}}{\\frac{1}{1+t^2}} = \\frac{1+t^2}{t}\\). (Lưu ý: đề ghi ký hiệu \\(y'(x)\\) nghĩa là đạo hàm \\(y\\) theo biến \\(x\\)).",
    "casio_tip": "<b>Phương pháp Tham số chuẩn:</b> Chọn \\(t = 2\\), bấm \\(\\frac{\\left.\\frac{d}{dx}(\\ln X)\\right|_{X=2}}{\\left.\\frac{d}{dx}(\\arctan X)\\right|_{X=2}} = 2,5\\). Thay \\(t = 2\\) vào 4 đáp án chỉ có C ra \\(\\frac{1+4}{2} = 2,5\\)."
  },
  {
    "id": "C2_10",
    "chapter": 2,
    "source": "Chương 2 - Câu 10",
    "question": "Tính \\(y'\\left(\\frac{\\pi}{4}\\right) = \\left.\\frac{dy}{dx}\\right|_{x=\\frac{\\pi}{4}}\\) của hàm \\(y = y(x)\\) cho bởi phương trình tham số \\(\\begin{cases} x = \\arctan t \\\\ y = \\ln t \\end{cases}\\).",
    "options": [
      "\\(y'\\left(\\frac{\\pi}{4}\\right) = 1\\).",
      "\\(y'\\left(\\frac{\\pi}{4}\\right) = 2\\).",
      "\\(y'\\left(\\frac{\\pi}{4}\\right) = 3\\).",
      "\\(y'\\left(\\frac{\\pi}{4}\\right) = 4\\)."
    ],
    "correct": 1,
    "explanation": "Tại \\(x = \\frac{\\pi}{4} \\Rightarrow \\arctan t = \\frac{\\pi}{4} \\Rightarrow t = 1\\).<br>Ta có \\(y'_x = \\frac{y'_t}{x'_t} = \\frac{1+t^2}{t}\\). Thay \\(t = 1\\) được \\(y'\\left(\\frac{\\pi}{4}\\right) = \\frac{1+1}{1} = 2\\).",
    "casio_tip": "<b>Phương pháp Tham số chuẩn:</b> Với \\(x = \\frac{\\pi}{4} \\Rightarrow t = \\tan\\frac{\\pi}{4} = 1\\). Bấm \\(\\frac{\\left.\\frac{d}{dx}(\\ln X)\\right|_{X=1}}{\\left.\\frac{d}{dx}(\\arctan X)\\right|_{X=1}} = 2\\)."
  },
  {
    "id": "C2_11",
    "chapter": 2,
    "source": "Chương 2 - Câu 11",
    "question": "Tính vi phân của hàm \\(y = (3x)^x\\).",
    "options": [
      "\\(dy = (3x)^x(\\ln 3x + 3)dx\\).",
      "\\(dy = (\\ln 3x + 1)dx\\).",
      "\\(dy = (3x)^x(\\ln 3x + 1)dx\\).",
      "\\(dy = (\\ln 3x + 3)dx\\)."
    ],
    "correct": 2,
    "explanation": "Ta có \\(\\ln y = x\\ln(3x) \\Rightarrow \\frac{y'}{y} = \\ln(3x) + x\\cdot\\frac{3}{3x} = \\ln(3x) + 1\\).<br>Vậy \\(dy = y'dx = (3x)^x(\\ln 3x + 1)dx\\).",
    "casio_tip": "<b>Phương pháp d/dx chuẩn:</b> Bấm \\(\\left.\\frac{d}{dx}\\left((3X)^X\\right)\\right|_{X=1} \\approx 6,2958\\). Thay \\(X = 1\\) vào 4 đáp án chỉ có C cho \\(3^1(\\ln 3 + 1) \\approx 6,2958\\)."
  },
  {
    "id": "C2_12",
    "chapter": 2,
    "source": "Chương 2 - Câu 12",
    "question": "Tính vi phân \\(dy\\) của hàm \\(y = \\arctan\\left(\\frac{\\ln x}{3}\\right)\\).",
    "options": [
      "\\(dy = -\\frac{3}{x(9+\\ln^2 x)}dx\\).",
      "\\(dy = \\frac{3}{x(1+\\ln^2 x)}dx\\).",
      "\\(dy = \\frac{1}{x(9+\\ln^2 x)}dx\\).",
      "\\(dy = \\frac{3}{x(9+\\ln^2 x)}dx\\)."
    ],
    "correct": 3,
    "explanation": "Ta có \\(y' = \\frac{\\left(\\frac{\\ln x}{3}\\right)'}{1 + \\left(\\frac{\\ln x}{3}\\right)^2} = \\frac{\\frac{1}{3x}}{\\frac{9+\\ln^2 x}{9}} = \\frac{3}{x(9+\\ln^2 x)} \\Rightarrow dy = \\frac{3}{x(9+\\ln^2 x)}dx\\).",
    "casio_tip": "<b>Phương pháp d/dx chuẩn:</b> Bấm \\(\\left.\\frac{d}{dx}\\left(\\arctan\\left(\\frac{\\ln X}{3}\\right)\\right)\\right|_{X=2} \\approx 0,1582\\). Thay \\(X = 2\\) vào 4 đáp án chỉ có D ra \\(0,1582\\)."
  },
  {
    "id": "C2_13",
    "chapter": 2,
    "source": "Chương 2 - Câu 13",
    "question": "Tính vi phân cấp 2 của hàm \\(y = \\ln(1+x^2)\\).",
    "options": [
      "\\(d^2y = \\frac{2x^2-2}{(1+x^2)^2}dx^2\\).",
      "\\(d^2y = \\frac{2x^2+2}{(1+x^2)^2}dx^2\\).",
      "\\(d^2y = \\frac{2-2x^2}{(1+x^2)^2}dx^2\\).",
      "\\(d^2y = -\\frac{2x^2+2}{(1+x^2)^2}dx^2\\)."
    ],
    "correct": 2,
    "explanation": "Ta có \\(y' = \\frac{2x}{1+x^2} \\Rightarrow y'' = \\frac{2(1+x^2) - 2x(2x)}{(1+x^2)^2} = \\frac{2-2x^2}{(1+x^2)^2} \\Rightarrow d^2y = \\frac{2-2x^2}{(1+x^2)^2}dx^2\\).",
    "casio_tip": "<b>Phương pháp d/dx chuẩn:</b> Tính nhanh \\(y' = \\frac{2x}{1+x^2}\\), rồi bấm \\(\\left.\\frac{d}{dx}\\left(\\frac{2X}{1+X^2}\\right)\\right|_{X=2} = -0,24\\). Thay \\(X = 2\\) vào 4 đáp án chỉ có C ra \\(\\frac{2-8}{25} = -0,24\\)."
  },
  {
    "id": "C2_14",
    "chapter": 2,
    "source": "Chương 2 - Câu 14",
    "question": "Tính vi phân cấp 2 của hàm \\(y = \\arctan(x^2)\\).",
    "options": [
      "\\(d^2y = \\frac{2+6x^4}{(1+x^4)^2}dx^2\\).",
      "\\(d^2y = \\frac{2-6x^4}{(1+x^4)^2}dx^2\\).",
      "\\(d^2y = \\frac{6x^4-2}{(1+x^4)^2}dx^2\\).",
      "\\(d^2y = -\\frac{2+6x^4}{(1+x^4)^2}dx^2\\)."
    ],
    "correct": 1,
    "explanation": "Ta có \\(y' = \\frac{2x}{1+x^4} \\Rightarrow y'' = \\frac{2(1+x^4) - 2x(4x^3)}{(1+x^4)^2} = \\frac{2-6x^4}{(1+x^4)^2} \\Rightarrow d^2y = \\frac{2-6x^4}{(1+x^4)^2}dx^2\\).",
    "casio_tip": "<b>Phương pháp d/dx chuẩn:</b> Tính \\(y' = \\frac{2x}{1+x^4}\\), bấm \\(\\left.\\frac{d}{dx}\\left(\\frac{2X}{1+X^4}\\right)\\right|_{X=1} = -1\\). Thay \\(X = 1\\) vào 4 đáp án: chỉ có B cho \\(\\frac{2-6}{4} = -1\\) (hoặc thử thêm \\(X=2\\))."
  },
  {
    "id": "C2_15",
    "chapter": 2,
    "source": "Chương 2 - Câu 15",
    "question": "Tìm giới hạn \\(\\lim_{x\\to 1}\\frac{\\sqrt[2024]{x} - 1}{\\sqrt[2025]{x} - 1}\\)",
    "options": [
      "\\(\\frac{2024}{2025}\\).",
      "\\(\\frac{2025}{2024}\\).",
      "0.",
      "\\(+\\infty\\)."
    ],
    "correct": 1,
    "explanation": "Áp dụng quy tắc L'Hospital: \\(\\lim_{x\\to 1}\\frac{\\frac{1}{2024}x^{\\frac{1}{2024}-1}}{\\frac{1}{2025}x^{\\frac{1}{2025}-1}} = \\frac{2025}{2024}\\).",
    "casio_tip": "<b>Phương pháp CALC chuẩn:</b> Nhập \\(\\frac{X^{1/2024}-1}{X^{1/2025}-1}\\), bấm <code>CALC</code> \\(X = 1,001 \\Rightarrow \\approx 1,0004938 = \\frac{2025}{2024}\\)."
  },
  {
    "id": "C2_16",
    "chapter": 2,
    "source": "Chương 2 - Câu 16",
    "question": "Xác định \\(m\\) để hàm số \\(f(x) = \\begin{cases} \\frac{e^{2x}-2x-1}{\\sin^2 x}, & \\text{nếu } x \\in (-1;1)\\setminus\\{0\\} \\\\ 3m-1, & \\text{nếu } x = 0 \\end{cases}\\) liên tục tại \\(x = 0\\).",
    "options": [
      "\\(m = 1\\).",
      "\\(m = 2\\).",
      "\\(m = 3\\).",
      "\\(m = 0\\)."
    ],
    "correct": 0,
    "explanation": "Thay \\(\\sin^2 x \\sim x^2\\) và dùng L'Hospital: \\(\\lim_{x\\to 0}\\frac{e^{2x}-2x-1}{x^2} = \\lim_{x\\to 0}\\frac{2e^{2x}-2}{2x} = 2\\).<br>Để hàm số liên tục tại \\(x = 0\\): \\(3m - 1 = 2 \\Leftrightarrow m = 1\\).",
    "casio_tip": "<b>Phương pháp Liên tục chuẩn:</b> <code>CALC</code> nhánh trên tại \\(X = 10^{-4}\\) được \\(2\\). Giải \\(3m - 1 = 2 \\Rightarrow m = 1\\)."
  },
  {
    "id": "C2_17",
    "chapter": 2,
    "source": "Chương 2 - Câu 17",
    "question": "Xác định \\(m\\) để hàm số \\(f(x) = \\begin{cases} \\frac{e^{-2x}+e^{2x}-2}{2x^2}, & \\text{nếu } x \\ne 0 \\\\ 2m, & \\text{nếu } x = 0 \\end{cases}\\) liên tục tại \\(x = 0\\).",
    "options": [
      "\\(m = 0\\).",
      "\\(m = 2\\).",
      "\\(m = 3\\).",
      "\\(m = 1\\)."
    ],
    "correct": 3,
    "explanation": "Áp dụng quy tắc L'Hospital 2 lần: \\(\\lim_{x\\to 0}\\frac{e^{-2x}+e^{2x}-2}{2x^2} = \\lim_{x\\to 0}\\frac{-2e^{-2x}+2e^{2x}}{4x} = \\lim_{x\\to 0}\\frac{4e^{-2x}+4e^{2x}}{4} = 2\\).<br>Để hàm số liên tục: \\(2m = 2 \\Leftrightarrow m = 1\\).",
    "casio_tip": "<b>Phương pháp Liên tục chuẩn:</b> <code>CALC</code> nhánh trên tại \\(X = 10^{-4}\\) được \\(2\\). Giải \\(2m = 2 \\Rightarrow m = 1\\)."
  },
  {
    "id": "C2_18",
    "chapter": 2,
    "source": "Chương 2 - Câu 18",
    "question": "Xác định \\(m\\) để hàm số \\(f(x) = \\begin{cases} \\frac{\\ln(1+x)-x}{\\sin^2 x}, & \\text{nếu } -1 < x < 0 \\\\ m - \\frac{1}{2}, & \\text{nếu } x = 0 \\end{cases}\\) liên tục tại \\(x = 0\\).",
    "options": [
      "\\(m = 3\\).",
      "\\(m = 2\\).",
      "\\(m = 1\\).",
      "\\(m = 0\\)."
    ],
    "correct": 3,
    "explanation": "Áp dụng L'Hospital: \\(\\lim_{x\\to 0^-}\\frac{\\ln(1+x)-x}{x^2} = \\lim_{x\\to 0^-}\\frac{\\frac{1}{1+x}-1}{2x} = -\\frac{1}{2}\\).<br>Để hàm liên tục: \\(m - \\frac{1}{2} = -\\frac{1}{2} \\Leftrightarrow m = 0\\).",
    "casio_tip": "<b>Phương pháp Liên tục chuẩn:</b> <code>CALC</code> nhánh trên tại \\(X = -10^{-4}\\) được \\(-0,5\\). Giải \\(m - 0,5 = -0,5 \\Rightarrow m = 0\\)."
  },
  {
    "id": "C2_19",
    "chapter": 2,
    "source": "Chương 2 - Câu 19",
    "question": "Tính giới hạn \\(\\lim_{x\\to 0}\\left(\\frac{\\tan x}{x}\\right)^{\\frac{1}{x}}\\).",
    "options": [
      "1.",
      "\\(\\sqrt[3]{e}\\).",
      "\\(\\sqrt{e}\\).",
      "\\(\\frac{3}{2}\\)."
    ],
    "correct": 0,
    "explanation": "Dạng \\(1^\\infty\\): Số mũ của \\(e\\) là \\(\\lim_{x\\to 0}\\frac{\\tan x - x}{x^2} = \\lim_{x\\to 0}\\frac{x^3/3}{x^2} = 0\\). Vậy giới hạn bằng \\(e^0 = 1\\).",
    "casio_tip": "<b>Phương pháp CALC chuẩn:</b> Nhập \\(\\left(\\frac{\\tan X}{X}\\right)^{1/X}\\), bấm <code>CALC</code> \\(X = 10^{-4} \\Rightarrow \\approx 1\\)."
  },
  {
    "id": "C2_20",
    "chapter": 2,
    "source": "Chương 2 - Câu 20",
    "question": "Tính giới hạn \\(\\lim_{x\\to -2}\\frac{\\sqrt[3]{x-6}+2}{x^3+8}\\).",
    "options": [
      "\\(-\\frac{1}{144}\\).",
      "\\(\\frac{1}{144}\\).",
      "\\(\\frac{1}{36}\\).",
      "\\(-\\frac{1}{36}\\)."
    ],
    "correct": 1,
    "explanation": "Áp dụng quy tắc L'Hospital tại \\(x = -2\\):<br>\\(\\lim_{x\\to -2}\\frac{\\frac{1}{3\\sqrt[3]{(x-6)^2}}}{3x^2} = \\frac{\\frac{1}{3\\cdot 4}}{3\\cdot 4} = \\frac{1}{144}\\).",
    "casio_tip": "<b>Phương pháp CALC chuẩn:</b> Nhập biểu thức, bấm <code>CALC</code> \\(X = -2 + 10^{-5} \\Rightarrow \\approx 6,944\\times 10^{-3} = \\frac{1}{144}\\)."
  },
  {
    "id": "C2_21",
    "chapter": 2,
    "source": "Chương 2 - Câu 21",
    "question": "Tính giới hạn \\(\\lim_{x\\to 0}\\frac{\\sqrt[5]{32+2x}-2}{\\sqrt[4]{x+16}-2}\\).",
    "options": [
      "\\(\\frac{2}{5}\\).",
      "\\(-\\frac{2}{5}\\).",
      "\\(\\frac{4}{5}\\).",
      "\\(-\\frac{4}{5}\\)."
    ],
    "correct": 2,
    "explanation": "Áp dụng quy tắc L'Hospital tại \\(x = 0\\):<br>\\(\\lim_{x\\to 0}\\frac{\\frac{2}{5(32+2x)^{4/5}}}{\\frac{1}{4(x+16)^{3/4}}} = \\frac{2/(5\\cdot 16)}{1/(4\\cdot 8)} = \\frac{1/40}{1/32} = \\frac{4}{5}\\).",
    "casio_tip": "<b>Phương pháp CALC chuẩn:</b> Nhập biểu thức, bấm <code>CALC</code> \\(X = 10^{-4} \\Rightarrow 0,8 = \\frac{4}{5}\\)."
  },
  {
    "id": "C2_22",
    "chapter": 2,
    "source": "Chương 2 - Câu 22",
    "question": "Tính giới hạn \\(\\lim_{x\\to 0}\\frac{x^2}{\\sqrt[5]{1+5x}-1-x}\\).",
    "options": [
      "\\(\\frac{2}{5}\\).",
      "\\(-\\frac{2}{5}\\).",
      "\\(\\frac{1}{2}\\).",
      "\\(-\\frac{1}{2}\\)."
    ],
    "correct": 3,
    "explanation": "Áp dụng quy tắc L'Hospital 2 lần:<br>\\(\\lim_{x\\to 0}\\frac{2x}{(1+5x)^{-4/5}-1} = \\lim_{x\\to 0}\\frac{2}{-4(1+5x)^{-9/5}} = -\\frac{1}{2}\\).",
    "casio_tip": "<b>Phương pháp CALC chuẩn:</b> Nhập biểu thức, bấm <code>CALC</code> \\(X = 10^{-3} \\Rightarrow \\approx -0,504 \\approx -\\frac{1}{2}\\)."
  },
  {
    "id": "C2_23",
    "chapter": 2,
    "source": "Chương 2 - Câu 23",
    "question": "Tính giới hạn \\(\\lim_{x\\to 0^+}(\\cos 2x + x^2)^{\\cot^3 x}\\).",
    "options": [
      "0.",
      "1.",
      "2.",
      "\\(+\\infty\\)."
    ],
    "correct": 0,
    "explanation": "Dạng \\(1^\\infty\\): Số mũ của \\(e\\) là \\(\\lim_{x\\to 0^+}\\frac{\\cos 2x - 1 + x^2}{\\tan^3 x}\\).<br>Vì \\(\\cos 2x - 1 \\sim -\\frac{(2x)^2}{2} = -2x^2\\), nên tử \\(\\sim -2x^2 + x^2 = -x^2\\).<br>Do đó \\(\\lim_{x\\to 0^+}\\frac{-x^2}{x^3} = \\lim_{x\\to 0^+}\\left(-\\frac{1}{x}\\right) = -\\infty \\Rightarrow e^{-\\infty} = 0\\).",
    "casio_tip": "<b>Phương pháp CALC chuẩn:</b> Nhập \\((\\cos(2X)+X^2)^{1/\\tan^3 X}\\), bấm <code>CALC</code> \\(X = 0,01 \\Rightarrow \\approx 3,7\\times 10^{-44} \\approx 0\\)."
  },
  {
    "id": "C2_24",
    "chapter": 2,
    "source": "Chương 2 - Câu 24",
    "question": "Tính giới hạn \\(\\lim_{x\\to 0}(\\cos x + \\sin^2 x)^{\\cot^2 x}\\).",
    "options": [
      "\\(e\\).",
      "\\(\\sqrt{e}\\).",
      "\\(\\sqrt[3]{e}\\).",
      "\\(\\sqrt[4]{e}\\)."
    ],
    "correct": 1,
    "explanation": "Dạng \\(1^\\infty\\): Số mũ của \\(e\\) là \\(\\lim_{x\\to 0}\\frac{(\\cos x - 1) + \\sin^2 x}{\\tan^2 x} = \\lim_{x\\to 0}\\frac{-x^2/2 + x^2}{x^2} = \\frac{1}{2}\\).<br>Vậy giới hạn bằng \\(e^{1/2} = \\sqrt{e}\\).",
    "casio_tip": "<b>Phương pháp CALC chuẩn:</b> Nhập \\((\\cos X + \\sin^2 X)^{1/\\tan^2 X}\\), bấm <code>CALC</code> \\(X = 10^{-3} \\Rightarrow \\approx 1,6487 = \\sqrt{e}\\)."
  },
  {
    "id": "C2_25",
    "chapter": 2,
    "source": "Chương 2 - Câu 25",
    "question": "Xác định \\(a, b\\) để hàm số \\(f(x) = \\begin{cases} x(x-1)+1, & \\text{nếu } x \\ge 0 \\\\ ax+b, & \\text{nếu } x < 0 \\end{cases}\\) có đạo hàm tại \\(x = 0\\).",
    "options": [
      "\\(a = -1; b = 1\\).",
      "\\(a = 1; b = 1\\).",
      "\\(a = -1; b = -1\\).",
      "\\(a = 1; b = -1\\)."
    ],
    "correct": 0,
    "explanation": "• Điều kiện liên tục tại \\(x = 0\\): \\(\\lim_{x\\to 0^-}(ax+b) = f(0) \\Leftrightarrow b = 1\\).<br>• Điều kiện đạo hàm hai phía bằng nhau tại \\(x = 0\\): Với \\(x > 0, f'(x) = 2x - 1 \\Rightarrow f'_+(0) = -1\\); với \\(x < 0, f'(x) = a \\Rightarrow f'_-(0) = a\\). Vậy \\(a = -1; b = 1\\).",
    "casio_tip": "<b>Phương pháp Chuẩn:</b> Thay \\(x=0\\) vào nhánh trên được \\(b = 1\\). Bấm \\(\\left.\\frac{d}{dx}(X(X-1)+1)\\right|_{X=0} = -1 \\Rightarrow a = -1\\)."
  },
  {
    "id": "C2_26",
    "chapter": 2,
    "source": "Chương 2 - Câu 26",
    "question": "Tính \\(y''(1) = \\left.\\frac{d^2y}{dx^2}\\right|_{x=1}\\) của hàm \\(y = y(x)\\) cho bởi phương trình tham số \\(\\begin{cases} x = \\ln t \\\\ y = t^3 \\end{cases}\\) với \\(t > 0\\).",
    "options": [
      "\\(y''(1) = 9e^2\\).",
      "\\(y''(1) = 9e^3\\).",
      "\\(y''(1) = 9e\\).",
      "\\(y''(1) = 9e^4\\)."
    ],
    "correct": 1,
    "explanation": "Từ \\(x = \\ln t \\Rightarrow t = e^x \\Rightarrow y = (e^x)^3 = e^{3x}\\).<br>Đạo hàm cấp 1 và cấp 2 theo \\(x\\): \\(y'(x) = 3e^{3x} \\Rightarrow y''(x) = 9e^{3x}\\).<br>Tại \\(x = 1 \\Rightarrow y''(1) = 9e^3\\).",
    "casio_tip": "<b>Phương pháp Tham số chuẩn:</b> Thế \\(t = e^x\\) vào \\(y = t^3 = e^{3x}\\), đạo hàm cấp 2 ra ngay \\(9e^{3x}\\), thay \\(x=1\\) được \\(9e^3\\)."
  },
  {
    "id": "C2_TL01",
    "chapter": 2,
    "source": "Chương 2 - Bài 1.2 (Trọng tâm)",
    "question": "Cho hàm số \\(y = x(x-1)(x-2)\\cdots(x-2020)(x-2021)\\). Tính \\(y'(0)\\).",
    "options": [
      "\\(y'(0) = 2021!\\).",
      "\\(y'(0) = -2021!\\).",
      "\\(y'(0) = 0\\).",
      "\\(y'(0) = -2020!\\)."
    ],
    "correct": 1,
    "explanation": "Theo định nghĩa đạo hàm tại \\(x = 0\\):<br>\\(y'(0) = \\lim_{x\\to 0}\\frac{y(x) - y(0)}{x} = \\lim_{x\\to 0}(x-1)(x-2)\\cdots(x-2021) = (-1)(-2)\\cdots(-2021) = -2021!\\).",
    "casio_tip": "<b>Mẹo quy nạp nhanh:</b> Thử với bậc lẻ đến \\(3\\): \\(y = x(x-1)(x-2)(x-3) \\Rightarrow \\left.\\frac{d}{dx}(y)\\right|_{X=0} = -6 = -3!\\). Tương tự với \\(2021\\) (số lẻ) thì \\(y'(0) = -2021!\\)."
  },
  {
    "id": "C2_TL02",
    "chapter": 2,
    "source": "Chương 2 - Bài 1.3 (Trọng tâm)",
    "question": "Tính đạo hàm một phía \\(f'_+(0), f'_-(0)\\) của hàm số \\(f(x) = \\begin{cases} \\frac{x}{1+e^{1/x}}, & \\text{nếu } x \\ne 0 \\\\ 0, & \\text{nếu } x = 0 \\end{cases}\\).",
    "options": [
      "\\(f'_+(0) = 0; f'_-(0) = 1\\).",
      "\\(f'_+(0) = 1; f'_-(0) = 0\\).",
      "\\(f'_+(0) = 0; f'_-(0) = 0\\).",
      "\\(f'_+(0) = 1; f'_-(0) = \\frac{1}{2}\\)."
    ],
    "correct": 0,
    "explanation": "Theo định nghĩa: \\(\\frac{f(x)-f(0)}{x} = \\frac{1}{1+e^{1/x}}\\).<br>• Khi \\(x \\to 0^+ \\Rightarrow e^{1/x} \\to +\\infty \\Rightarrow f'_+(0) = 0\\).<br>• Khi \\(x \\to 0^- \\Rightarrow e^{1/x} \\to 0 \\Rightarrow f'_-(0) = \\frac{1}{1+0} = 1\\).",
    "casio_tip": "<b>Phương pháp CALC chuẩn:</b> Lập tỉ số \\(\\frac{f(X)-f(0)}{X} = \\frac{1}{1+e^{1/X}}\\), bấm <code>CALC</code> tại \\(X = 0,01 \\Rightarrow 0\\) và \\(X = -0,01 \\Rightarrow 1\\)."
  },
  {
    "id": "C2_TL03",
    "chapter": 2,
    "source": "Chương 2 - Bài 1.4a (Trọng tâm)",
    "question": "Tính đạo hàm \\(y'_x = \\frac{dy}{dx}\\) tại \\(t = 0\\) của hàm số cho dưới dạng tham số \\(\\begin{cases} x = e^t\\cos 2t \\\\ y = e^t\\sin 2t \\end{cases}\\).",
    "options": [
      "\\(y'_x(0) = 2\\).",
      "\\(y'_x(0) = 1\\).",
      "\\(y'_x(0) = -2\\).",
      "\\(y'_x(0) = \\frac{1}{2}\\)."
    ],
    "correct": 0,
    "explanation": "Ta có \\(x'_t = e^t(\\cos 2t - 2\\sin 2t) \\Rightarrow x'_t(0) = 1\\).<br>\\(y'_t = e^t(\\sin 2t + 2\\cos 2t) \\Rightarrow y'_t(0) = 2\\).<br>Vậy \\(y'_x(0) = \\frac{y'_t(0)}{x'_t(0)} = \\frac{2}{1} = 2\\).",
    "casio_tip": "<b>Phương pháp Tham số chuẩn:</b> Bấm trực tiếp \\(\\frac{\\left.\\frac{d}{dx}(e^X\\sin 2X)\\right|_{X=0}}{\\left.\\frac{d}{dx}(e^X\\cos 2X)\\right|_{X=0}} = 2\\)."
  },
  {
    "id": "C2_TL04",
    "chapter": 2,
    "source": "Chương 2 - Bài 1.4e (Trọng tâm)",
    "question": "Cho hàm số tham số \\(\\begin{cases} x = t + e^t \\\\ y = t^2 + 2t^3 \\end{cases}\\). Tính \\(y'_x\\) và \\(y''_{xx}\\) tại \\(t = 0\\).",
    "options": [
      "\\(y'_x(0) = 0; y''_{xx}(0) = \\frac{1}{2}\\).",
      "\\(y'_x(0) = 0; y''_{xx}(0) = 1\\).",
      "\\(y'_x(0) = 1; y''_{xx}(0) = \\frac{1}{2}\\).",
      "\\(y'_x(0) = 0; y''_{xx}(0) = \\frac{1}{4}\\)."
    ],
    "correct": 0,
    "explanation": "Ta có \\(x'_t = 1 + e^t, y'_t = 2t + 6t^2 \\Rightarrow y'_x = \\frac{2t+6t^2}{1+e^t} \\Rightarrow y'_x(0) = 0\\).<br>Đạo hàm cấp 2: \\(y''_{xx} = \\frac{(y'_x)'_t}{x'_t}\\). Tại \\(t = 0\\), \\((y'_x)'_t(0) = \\frac{2(1+1) - 0}{2^2} = 1\\) và \\(x'_t(0) = 2 \\Rightarrow y''_{xx}(0) = \\frac{1}{2}\\).",
    "casio_tip": "<b>Phương pháp Tham số chuẩn:</b> Tính \\(y'_x = \\frac{2t+6t^2}{1+e^t} = 0\\) tại \\(t=0\\). Sau đó bấm \\(\\frac{\\left.\\frac{d}{dx}\\left(\\frac{2X+6X^2}{1+e^X}\\right)\\right|_{X=0}}{\\left.\\frac{d}{dx}(X+e^X)\\right|_{X=0}} = 0,5 = \\frac{1}{2}\\)."
  },
  {
    "id": "C2_TL05",
    "chapter": 2,
    "source": "Chương 2 - Bài 2.6 (Trọng tâm)",
    "question": "Xét tính liên tục và khả vi tại \\(x = 1\\) của hàm số \\(y(x) = \\begin{cases} x^2 e^{1-x^2}, & \\text{nếu } x \\le 1 \\\\ \\frac{1}{x}, & \\text{nếu } x > 1 \\end{cases}\\).",
    "options": [
      "Hàm số liên tục tại \\(x = 1\\) nhưng không khả vi tại \\(x = 1\\).",
      "Hàm số khả vi tại \\(x = 1\\) và \\(y'(1) = 0\\).",
      "Hàm số khả vi tại \\(x = 1\\) và \\(y'(1) = -1\\).",
      "Hàm số không liên tục tại \\(x = 1\\)."
    ],
    "correct": 0,
    "explanation": "• Tại \\(x = 1\\): \\(\\lim_{x\\to 1^+} \\frac{1}{x} = 1 = y(1)\\) nên hàm số liên tục tại \\(x = 1\\).<br>• Đạo hàm trái: \\(y'_-(1) = \\left.(2x - 2x^3)e^{1-x^2}\\right|_{x=1} = 0\\). Đạo hàm phải: \\(y'_+(1) = \\left.\\left(-\\frac{1}{x^2}\\right)\\right|_{x=1} = -1 \\ne 0\\). Vậy hàm số không khả vi tại \\(x = 1\\).",
    "casio_tip": "<b>Phương pháp Chuẩn:</b> Thay \\(X=1\\) vào 2 nhánh đều ra \\(1\\) (liên tục). Bấm \\(\\frac{d}{dx}\\) tại \\(X=1\\) cho nhánh trên ra \\(0\\), nhánh dưới ra \\(-1\\) (khác nhau \\(\\Rightarrow\\) không khả vi)."
  },
  {
    "id": "C2_TL06",
    "chapter": 2,
    "source": "Chương 2 - Bài 2.7 (Trọng tâm)",
    "question": "Xét tính khả vi tại \\(x = 0\\) của hàm số \\(f(x) = \\begin{cases} x^2\\arctan\\frac{1}{x}, & \\text{nếu } x \\ne 0 \\\\ 0, & \\text{nếu } x = 0 \\end{cases}\\). Chọn khẳng định đúng.",
    "options": [
      "Hàm số khả vi tại \\(x = 0\\) và \\(f'(0) = 0\\).",
      "Hàm số khả vi tại \\(x = 0\\) và \\(f'(0) = \\frac{\\pi}{2}\\).",
      "Hàm số không khả vi tại \\(x = 0\\).",
      "Hàm số khả vi tại \\(x = 0\\) và \\(f'(0) = 1\\)."
    ],
    "correct": 0,
    "explanation": "Xét giới hạn tỉ số số gia: \\(\\lim_{x\\to 0}\\frac{f(x)-f(0)}{x} = \\lim_{x\\to 0} x\\arctan\\frac{1}{x} = 0\\) (do \\(x \\to 0\\) và \\(\\left|\\arctan\\frac{1}{x}\\right| \\le \\frac{\\pi}{2}\\) bị chặn). Vậy hàm số khả vi tại \\(x = 0\\) và \\(f'(0) = 0\\).",
    "casio_tip": "<b>Phương pháp CALC chuẩn:</b> Lập tỉ số \\(\\frac{f(X)-f(0)}{X} = X\\arctan\\frac{1}{X}\\), bấm <code>CALC</code> tại \\(X = \\pm 10^{-5}\\) đều ra \\(\\approx 0 \\Rightarrow f'(0) = 0\\)."
  },
  {
    "id": "C2_TL07",
    "chapter": 2,
    "source": "Chương 2 - Bài 2.8 (Trọng tâm)",
    "question": "Tìm \\(a, b\\) để hàm số \\(f(x) = \\begin{cases} x^2 - 3x + 4, & \\text{nếu } x < 2 \\\\ ax + b, & \\text{nếu } x \\ge 2 \\end{cases}\\) khả vi trên \\(\\mathbb{R}\\).",
    "options": [
      "\\(a = 1; b = 0\\).",
      "\\(a = 1; b = 2\\).",
      "\\(a = -1; b = 4\\).",
      "\\(a = 2; b = -2\\)."
    ],
    "correct": 0,
    "explanation": "• Điều kiện đạo hàm tại \\(x = 2\\): \\(a = \\left.(2x-3)\\right|_{x=2} = 1\\).<br>• Điều kiện liên tục tại \\(x = 2\\): \\(2a + b = 2^2 - 3(2) + 4 = 2 \\Rightarrow 2(1) + b = 2 \\Rightarrow b = 0\\).",
    "casio_tip": "<b>Phương pháp Chuẩn:</b> Bấm \\(\\left.\\frac{d}{dx}(X^2-3X+4)\\right|_{X=2} = 1 \\Rightarrow a = 1\\). Thay \\(X = 2\\) vào \\(X^2-3X+4\\) được \\(2 = 2a + b \\Rightarrow b = 0\\)."
  },
  {
    "id": "C2_TL08",
    "chapter": 2,
    "source": "Chương 2 - Bài 3.2 (Trọng tâm)",
    "question": "Cho hàm số \\(f(x) = \\ln(1-3x)\\). Tính đạo hàm cấp cao \\(f^{(n)}(0)\\) với \\(n \\ge 1\\).",
    "options": [
      "\\(f^{(n)}(0) = -3^n (n-1)!\\).",
      "\\(f^{(n)}(0) = (-1)^{n-1} 3^n (n-1)!\\).",
      "\\(f^{(n)}(0) = -3^n n!\\).",
      "\\(f^{(n)}(0) = 3^n (n-1)!\\)."
    ],
    "correct": 0,
    "explanation": "Ta có \\(f'(x) = \\frac{-3}{1-3x}, f''(x) = \\frac{-3^2 \\cdot 1!}{(1-3x)^2}, \\dots, f^{(n)}(x) = \\frac{-3^n (n-1)!}{(1-3x)^n}\\).<br>Thay \\(x = 0\\) ta được \\(f^{(n)}(0) = -3^n (n-1)!\\).",
    "casio_tip": "<b>Phương pháp d/dx chuẩn:</b> Cho \\(n = 1 \\Rightarrow f'(0) = -3\\); cho \\(n = 2 \\Rightarrow f''(0) = -9\\). Thay \\(n = 1, 2\\) vào 4 đáp án chỉ có A đều khớp (\\(-3\\) và \\(-9\\))."
  },
  {
    "id": "C2_TL09",
    "chapter": 2,
    "source": "Chương 2 - Bài 3.3 (Trọng tâm)",
    "question": "Cho hàm số \\(y = \\frac{x^4}{2-x}\\). Tính vi phân cấp 4 là \\(d^4y\\).",
    "options": [
      "\\(d^4y = \\frac{384}{(2-x)^5}dx^4\\).",
      "\\(d^4y = \\frac{24}{(2-x)^5}dx^4\\).",
      "\\(d^4y = -\\frac{384}{(2-x)^5}dx^4\\).",
      "\\(d^4y = \\frac{192}{(2-x)^5}dx^4\\)."
    ],
    "correct": 0,
    "explanation": "Chia đa thức: \\(y = \\frac{x^4-16+16}{2-x} = -(x^3+2x^2+4x+8) + \\frac{16}{2-x}\\).<br>Đạo hàm cấp 4 của đa thức bậc 3 bằng \\(0\\), còn \\(\\left(\\frac{16}{2-x}\\right)^{(4)} = \\frac{16 \\cdot 4!}{(2-x)^5} = \\frac{384}{(2-x)^5}\\).",
    "casio_tip": "<b>Mẹo tách phần dư:</b> Thay \\(x = 2\\) vào tử \\(x^4\\) được \\(2^4 = 16\\), nên phần phân thức là \\(\\frac{16}{2-x}\\). Đạo hàm cấp 4 nhân thêm \\(4! = 24 \\Rightarrow 16 \\times 24 = 384\\)."
  },
  {
    "id": "C2_TL10",
    "chapter": 2,
    "source": "Chương 2 - Bài 4.8 (Trọng tâm)",
    "question": "Áp dụng quy tắc L'Hospital, tính giới hạn \\(I = \\lim_{x\\to 0}\\left(\\frac{\\sin x}{x}\\right)^{\\frac{1}{x^2}}\\).",
    "options": [
      "\\(e^{-\\frac{1}{6}}\\).",
      "\\(e^{-\\frac{1}{3}}\\).",
      "\\(e^{-\\frac{1}{2}}\\).",
      "1."
    ],
    "correct": 0,
    "explanation": "Dạng \\(1^\\infty\\): Số mũ của \\(e\\) là \\(\\lim_{x\\to 0}\\frac{\\sin x - x}{x^3}\\). Áp dụng L'Hospital: \\(\\lim_{x\\to 0}\\frac{\\cos x - 1}{3x^2} = \\lim_{x\\to 0}\\frac{-x^2/2}{3x^2} = -\\frac{1}{6}\\). Vậy \\(I = e^{-1/6}\\).",
    "casio_tip": "<b>Phương pháp CALC chuẩn:</b> Nhập \\(\\left(\\frac{\\sin X}{X}\\right)^{1/X^2}\\), bấm <code>CALC</code> \\(X = 10^{-3} \\Rightarrow \\approx 0,84648 = e^{-1/6}\\)."
  },
  {
    "id": "C2_TL11",
    "chapter": 2,
    "source": "Chương 2 - Bài 4.17 (Trọng tâm)",
    "question": "Áp dụng quy tắc L'Hospital, tính giới hạn \\(I = \\lim_{x\\to 0}\\left(\\frac{1}{x^2} - \\frac{1}{\\sin^2 x}\\right)\\).",
    "options": [
      "\\(-\\frac{1}{3}\\).",
      "\\(\\frac{1}{3}\\).",
      "\\(-\\frac{1}{6}\\).",
      "0."
    ],
    "correct": 0,
    "explanation": "Quy đồng mẫu số: \\(\\lim_{x\\to 0}\\frac{\\sin^2 x - x^2}{x^2\\sin^2 x} = \\lim_{x\\to 0}\\frac{\\sin^2 x - x^2}{x^4} = \\lim_{x\\to 0}\\frac{(\\sin x - x)(\\sin x + x)}{x^4} = \\lim_{x\\to 0}\\frac{(-x^3/6)(2x)}{x^4} = -\\frac{1}{3}\\). (Hoặc dùng L'Hospital cho \\(\\frac{\\sin^2 x - x^2}{x^4}\\)).",
    "casio_tip": "<b>Phương pháp CALC chuẩn:</b> Nhập \\(\\frac{1}{X^2} - \\frac{1}{\\sin^2 X}\\), bấm <code>CALC</code> \\(X = 10^{-3} \\Rightarrow \\approx -0,3333 = -\\frac{1}{3}\\)."
  },
  {
    "id": "C3_01",
    "chapter": 3,
    "source": "Chương 3 - Câu 1",
    "question": "Tính \\(I = \\int \\frac{3}{x+a}dx\\).",
    "options": [
      "\\(I = 3|x+a| + C\\).",
      "\\(I = 3\\ln(x+a) + C\\).",
      "\\(I = -3\\ln(x+a) + C\\).",
      "\\(I = 3\\ln|x+a| + C\\)."
    ],
    "correct": 3,
    "explanation": "Áp dụng công thức nguyên hàm cơ bản \\(\\int\\frac{du}{u} = \\ln|u| + C\\) (phải có dấu giá trị tuyệt đối vì \\(x+a\\) có thể âm):<br>\\(I = 3\\ln|x+a| + C\\).",
    "casio_tip": "<b>Phương pháp d/dx chuẩn:</b> Chọn \\(a = 2, X = -5\\) (để \\(x+a < 0\\)). Khi đó \\(\\ln(x+a)\\) báo lỗi <code>Math ERROR</code>, chỉ có \\(\\ln|x+a|\\) tính được và \\(\\left.\\frac{d}{dx}(3\\ln|X+2|)\\right|_{X=-5} = -1 = \\frac{3}{-5+2}\\)."
  },
  {
    "id": "C3_02",
    "chapter": 3,
    "source": "Chương 3 - Câu 2",
    "question": "Tính \\(I = \\int \\frac{3}{(x+a)^2}dx\\).",
    "options": [
      "\\(I = -\\frac{3}{x+a} + C\\).",
      "\\(I = 3\\ln(x+a) + C\\).",
      "\\(I = \\frac{3}{x+a} + C\\).",
      "\\(I = 3|x+a| + C\\)."
    ],
    "correct": 0,
    "explanation": "Ta có \\(\\int \\frac{3}{(x+a)^2}dx = 3\\int (x+a)^{-2}d(x+a) = -\\frac{3}{x+a} + C\\).",
    "casio_tip": "<b>Phương pháp d/dx chuẩn:</b> Chọn \\(a = 1, X = 2\\). Hàm dưới tích phân là \\(\\frac{3}{(2+1)^2} = \\frac{1}{3}\\). Bấm \\(\\left.\\frac{d}{dx}\\left(-\\frac{3}{X+1}\\right)\\right|_{X=2} = \\frac{1}{3} \\Rightarrow\\) Chọn A."
  },
  {
    "id": "C3_03",
    "chapter": 3,
    "source": "Chương 3 - Câu 3",
    "question": "Tính \\(I = \\int \\frac{dx}{x^2-3x+2}\\).",
    "options": [
      "\\(I = \\ln\\left|\\frac{x-1}{x-2}\\right| + C\\).",
      "\\(I = \\ln\\left|\\frac{x-2}{x-1}\\right| + C\\).",
      "\\(I = \\ln\\left(\\frac{x-1}{x-2}\\right) + C\\).",
      "\\(I = \\ln\\left(\\frac{x-2}{x-1}\\right) + C\\)."
    ],
    "correct": 1,
    "explanation": "Tách phân thức: \\(\\frac{1}{x^2-3x+2} = \\frac{1}{(x-1)(x-2)} = \\frac{1}{x-2} - \\frac{1}{x-1}\\).<br>Do đó \\(I = \\ln|x-2| - \\ln|x-1| + C = \\ln\\left|\\frac{x-2}{x-1}\\right| + C\\).",
    "casio_tip": "<b>Phương pháp d/dx chuẩn:</b> Chọn \\(X = 1,5\\) (khi đó \\(\\frac{x-2}{x-1} = -1 < 0\\) nên loại ngay C, D vì thiếu trị tuyệt đối). Bấm \\(\\left.\\frac{d}{dx}\\left(\\ln\\left|\\frac{X-2}{X-1}\\right|\\right)\\right|_{X=1,5} = -4 = \\frac{1}{1,5^2-3(1,5)+2} \\Rightarrow\\) Chọn B."
  },
  {
    "id": "C3_04",
    "chapter": 3,
    "source": "Chương 3 - Câu 4",
    "question": "Tính \\(I = \\int \\sin(3x+1)dx\\).",
    "options": [
      "\\(I = \\frac{\\cos(3x+1)}{3} + C\\).",
      "\\(I = -\\frac{\\cos(3x+1)}{3} + C\\).",
      "\\(I = \\cos(3x+1) + C\\).",
      "\\(I = -\\cos(3x+1) + C\\)."
    ],
    "correct": 1,
    "explanation": "Áp dụng công thức \\(\\int \\sin(ax+b)dx = -\\frac{\\cos(ax+b)}{a} + C \\Rightarrow I = -\\frac{\\cos(3x+1)}{3} + C\\).",
    "casio_tip": "<b>Phương pháp d/dx chuẩn:</b> Để chế độ <code>Rad</code>, chọn \\(X = 1\\). Tính \\(\\sin(4) \\approx -0,7568\\). Bấm \\(\\left.\\frac{d}{dx}\\left(-\\frac{\\cos(3X+1)}{3}\\right)\\right|_{X=1} \\approx -0,7568 \\Rightarrow\\) Chọn B."
  },
  {
    "id": "C3_05",
    "chapter": 3,
    "source": "Chương 3 - Câu 5",
    "question": "Tính \\(I = \\int \\cos(5x-2)dx\\).",
    "options": [
      "\\(I = \\frac{\\sin(5x-2)}{5} + C\\).",
      "\\(I = -\\frac{\\sin(5x-2)}{5} + C\\).",
      "\\(I = \\sin(5x-2) + C\\).",
      "\\(I = -\\sin(5x-2) + C\\)."
    ],
    "correct": 0,
    "explanation": "Áp dụng công thức \\(\\int \\cos(ax+b)dx = \\frac{\\sin(ax+b)}{a} + C \\Rightarrow I = \\frac{\\sin(5x-2)}{5} + C\\).",
    "casio_tip": "<b>Phương pháp d/dx chuẩn:</b> Để chế độ <code>Rad</code>, chọn \\(X = 1\\). Tính \\(\\cos(3) \\approx -0,98999\\). Bấm \\(\\left.\\frac{d}{dx}\\left(\\frac{\\sin(5X-2)}{5}\\right)\\right|_{X=1} \\approx -0,98999 \\Rightarrow\\) Chọn A."
  },
  {
    "id": "C3_06",
    "chapter": 3,
    "source": "Chương 3 - Câu 6",
    "question": "Tính \\(I = \\int \\frac{dx}{4x-1}\\).",
    "options": [
      "\\(I = \\frac{\\ln|4x-1|}{4} + C\\).",
      "\\(I = \\frac{\\ln(4x-1)}{4} + C\\).",
      "\\(I = \\ln(4x-2) + C\\).",
      "\\(I = \\ln(4x-1) + C\\)."
    ],
    "correct": 0,
    "explanation": "Áp dụng công thức \\(\\int \\frac{dx}{ax+b} = \\frac{\\ln|ax+b|}{a} + C\\) (có dấu giá trị tuyệt đối): \\(I = \\frac{\\ln|4x-1|}{4} + C\\).",
    "casio_tip": "<b>Phương pháp d/dx chuẩn:</b> Bấm \\(\\left.\\frac{d}{dx}\\left(\\frac{\\ln|4X-1|}{4}\\right)\\right|_{X=1} = \\frac{1}{3}\\) và luôn chọn đáp án có dấu giá trị tuyệt đối \\(\\ln|4x-1|\\) \\(\\Rightarrow\\) Chọn A."
  },
  {
    "id": "C3_07",
    "chapter": 3,
    "source": "Chương 3 - Câu 7",
    "question": "Tính \\(I = \\int \\frac{e^3}{e^{2x}}dx\\).",
    "options": [
      "\\(I = \\frac{e^{3-2x}}{2} + C\\).",
      "\\(I = -\\frac{e^{3-2x}}{2} + C\\).",
      "\\(I = e^{3-2x} + C\\).",
      "\\(I = -e^{3-2x} + C\\)."
    ],
    "correct": 1,
    "explanation": "Ta có \\(I = \\int e^{3-2x}dx = -\\frac{e^{3-2x}}{2} + C\\).",
    "casio_tip": "<b>Phương pháp d/dx chuẩn:</b> Chọn \\(X = 1,5\\). Hàm dưới tích phân là \\(\\frac{e^3}{e^3} = 1\\). Bấm \\(\\left.\\frac{d}{dx}\\left(-\\frac{e^{3-2X}}{2}\\right)\\right|_{X=1,5} = 1 \\Rightarrow\\) Chọn B."
  },
  {
    "id": "C3_08",
    "chapter": 3,
    "source": "Chương 3 - Câu 8",
    "question": "Tính \\(I = \\int (2^x + x^2)dx\\).",
    "options": [
      "\\(I = 2^x + x^3 + C\\).",
      "\\(I = 2^x + \\frac{x^3}{3} + C\\).",
      "\\(I = \\frac{2^x}{\\ln 2} + \\frac{x^3}{3} + C\\).",
      "\\(I = \\frac{2^x}{\\ln 2} + x^3 + C\\)."
    ],
    "correct": 2,
    "explanation": "Ta có \\(\\int 2^x dx = \\frac{2^x}{\\ln 2}\\) và \\(\\int x^2 dx = \\frac{x^3}{3}\\). Do đó \\(I = \\frac{2^x}{\\ln 2} + \\frac{x^3}{3} + C\\).",
    "casio_tip": "<b>Phương pháp d/dx chuẩn:</b> Chọn \\(X = 1 \\Rightarrow 2^1 + 1^2 = 3\\). Bấm \\(\\left.\\frac{d}{dx}\\left(\\frac{2^X}{\\ln 2} + \\frac{X^3}{3}\\right)\\right|_{X=1} = 3 \\Rightarrow\\) Chọn C."
  },
  {
    "id": "C3_09",
    "chapter": 3,
    "source": "Chương 3 - Câu 9",
    "question": "Tính \\(I = \\int \\frac{dx}{7x-3}\\).",
    "options": [
      "\\(I = \\frac{\\ln(7x-3)}{7} + C\\).",
      "\\(I = \\ln|7x-3| + C\\).",
      "\\(I = \\ln(7x-3) + C\\).",
      "\\(I = \\frac{\\ln|7x-3|}{7} + C\\)."
    ],
    "correct": 3,
    "explanation": "Áp dụng công thức \\(\\int\\frac{dx}{ax+b} = \\frac{\\ln|ax+b|}{a} + C \\Rightarrow I = \\frac{\\ln|7x-3|}{7} + C\\).",
    "casio_tip": "<b>Phương pháp d/dx chuẩn:</b> Đạo hàm ra \\(\\frac{1}{7x-3}\\) và bắt buộc có dấu giá trị tuyệt đối \\(\\ln|7x-3|\\) \\(\\Rightarrow\\) Chọn D."
  },
  {
    "id": "C3_10",
    "chapter": 3,
    "source": "Chương 3 - Câu 10",
    "question": "Tính \\(I = \\int 5^{3x+1}dx\\).",
    "options": [
      "\\(I = 5^{3x+1} + C\\).",
      "\\(I = \\frac{5^{3x+1}}{3\\ln 5} + C\\).",
      "\\(I = 5^{3x} + C\\).",
      "\\(I = \\frac{5^{3x+1}}{3} + C\\)."
    ],
    "correct": 1,
    "explanation": "Ta có \\(\\int 5^{3x+1}dx = \\frac{1}{3}\\int 5^{3x+1}d(3x+1) = \\frac{5^{3x+1}}{3\\ln 5} + C\\).",
    "casio_tip": "<b>Phương pháp d/dx chuẩn:</b> Chọn \\(X = 0 \\Rightarrow 5^1 = 5\\). Bấm \\(\\left.\\frac{d}{dx}\\left(\\frac{5^{3X+1}}{3\\ln 5}\\right)\\right|_{X=0} = 5 \\Rightarrow\\) Chọn B."
  },
  {
    "id": "C3_11",
    "chapter": 3,
    "source": "Chương 3 - Câu 11",
    "question": "Tính \\(I = \\int \\sin x\\cos x dx\\).",
    "options": [
      "\\(I = -\\frac{\\cos 2x}{4} + C\\).",
      "\\(I = \\cos 2x + C\\).",
      "\\(I = \\sin 2x + C\\).",
      "\\(I = -\\sin 2x + C\\)."
    ],
    "correct": 0,
    "explanation": "Ta có \\(\\sin x\\cos x = \\frac{1}{2}\\sin 2x \\Rightarrow I = \\frac{1}{2}\\int \\sin 2x dx = -\\frac{\\cos 2x}{4} + C\\).",
    "casio_tip": "<b>Phương pháp d/dx chuẩn:</b> Chọn \\(X = 1 \\Rightarrow \\sin 1\\cos 1 \\approx 0,4546\\). Bấm \\(\\left.\\frac{d}{dx}\\left(-\\frac{\\cos 2X}{4}\\right)\\right|_{X=1} \\approx 0,4546 \\Rightarrow\\) Chọn A."
  },
  {
    "id": "C3_12",
    "chapter": 3,
    "source": "Chương 3 - Câu 12",
    "question": "Tính \\(I = \\int \\sqrt{9^x + 9^{-x} + 2}dx\\).",
    "options": [
      "\\(I = 3^x - 3^{-x} + C\\).",
      "\\(I = 3^x + 3^{-x} + C\\).",
      "\\(I = \\frac{3^x - 3^{-x}}{\\ln 3} + C\\).",
      "\\(I = \\frac{3^x}{\\ln 3} + C\\)."
    ],
    "correct": 2,
    "explanation": "Ta có \\(9^x + 9^{-x} + 2 = (3^x + 3^{-x})^2 \\Rightarrow \\sqrt{9^x+9^{-x}+2} = 3^x + 3^{-x}\\).<br>Vậy \\(I = \\int (3^x + 3^{-x})dx = \\frac{3^x - 3^{-x}}{\\ln 3} + C\\).",
    "casio_tip": "<b>Phương pháp d/dx chuẩn:</b> Chọn \\(X = 0 \\Rightarrow \\sqrt{1+1+2} = 2\\). Bấm \\(\\left.\\frac{d}{dx}\\left(\\frac{3^X - 3^{-X}}{\\ln 3}\\right)\\right|_{X=0} = 2 \\Rightarrow\\) Chọn C."
  },
  {
    "id": "C3_13",
    "chapter": 3,
    "source": "Chương 3 - Câu 13",
    "question": "Tính \\(I = \\int \\frac{dx}{x^2+x-2}\\).",
    "options": [
      "\\(I = \\frac{1}{3}\\ln\\left|\\frac{x-1}{x+2}\\right| + C\\).",
      "\\(I = \\ln\\left|\\frac{x-1}{x+2}\\right| + C\\).",
      "\\(I = \\ln\\frac{x-1}{x+2} + C\\).",
      "\\(I = \\ln\\frac{x+2}{x-1} + C\\)."
    ],
    "correct": 0,
    "explanation": "Tách phân thức: \\(\\frac{1}{x^2+x-2} = \\frac{1}{(x-1)(x+2)} = \\frac{1}{3}\\left(\\frac{1}{x-1} - \\frac{1}{x+2}\\right)\\).<br>Do đó \\(I = \\frac{1}{3}\\ln\\left|\\frac{x-1}{x+2}\\right| + C\\).",
    "casio_tip": "<b>Phương pháp d/dx chuẩn:</b> Chọn \\(X = 2 \\Rightarrow \\frac{1}{4+2-2} = 0,25\\). Bấm \\(\\left.\\frac{d}{dx}\\left(\\frac{1}{3}\\ln\\left|\\frac{X-1}{X+2}\\right|\\right)\\right|_{X=2} = 0,25 \\Rightarrow\\) Chọn A."
  },
  {
    "id": "C3_14",
    "chapter": 3,
    "source": "Chương 3 - Câu 14",
    "question": "Tính \\(I = \\int \\frac{dx}{x^2-x-6}\\).",
    "options": [
      "\\(I = \\frac{1}{5}\\ln\\left|\\frac{x-3}{x+2}\\right| + C\\).",
      "\\(I = \\ln\\left|\\frac{x-3}{x+2}\\right| + C\\).",
      "\\(I = \\ln\\frac{x-3}{x+2} + C\\).",
      "\\(I = \\ln\\frac{x+2}{x-3} + C\\)."
    ],
    "correct": 0,
    "explanation": "Tách phân thức: \\(\\frac{1}{x^2-x-6} = \\frac{1}{(x-3)(x+2)} = \\frac{1}{5}\\left(\\frac{1}{x-3} - \\frac{1}{x+2}\\right) \\Rightarrow I = \\frac{1}{5}\\ln\\left|\\frac{x-3}{x+2}\\right| + C\\).",
    "casio_tip": "<b>Phương pháp d/dx chuẩn:</b> Chọn \\(X = 4 \\Rightarrow \\frac{1}{16-4-6} = \\frac{1}{6}\\). Bấm \\(\\left.\\frac{d}{dx}\\left(\\frac{1}{5}\\ln\\left|\\frac{X-3}{X+2}\\right|\\right)\\right|_{X=4} = \\frac{1}{6} \\Rightarrow\\) Chọn A."
  },
  {
    "id": "C3_15",
    "chapter": 3,
    "source": "Chương 3 - Câu 15",
    "question": "Tính \\(I = \\int \\frac{7^2}{7^{5x}}dx\\).",
    "options": [
      "\\(I = \\frac{7^{2-5x}}{\\ln 7} + C\\).",
      "\\(I = -\\frac{7^{2-5x}}{5\\ln 7} + C\\).",
      "\\(I = 7^{5x} + C\\).",
      "\\(I = \\frac{7^{1-5x}}{\\ln 7} + C\\)."
    ],
    "correct": 1,
    "explanation": "Ta có \\(I = \\int 7^{2-5x}dx = -\\frac{7^{2-5x}}{5\\ln 7} + C\\).",
    "casio_tip": "<b>Phương pháp d/dx chuẩn:</b> Chọn \\(X = 0,4 \\Rightarrow \\frac{7^2}{7^2} = 1\\). Bấm \\(\\left.\\frac{d}{dx}\\left(-\\frac{7^{2-5X}}{5\\ln 7}\\right)\\right|_{X=0,4} = 1 \\Rightarrow\\) Chọn B."
  },
  {
    "id": "C3_16",
    "chapter": 3,
    "source": "Chương 3 - Câu 16",
    "question": "Tính \\(I = \\int \\frac{2e^x}{\\sqrt{2+2e^x+e^{2x}}}dx\\).",
    "options": [
      "\\(I = 2\\ln\\left(e^x+1+\\sqrt{2+2e^x+e^{2x}}\\right) + C\\).",
      "\\(I = \\ln\\left(e^x+1+\\sqrt{2+2e^x+e^{2x}}\\right) + C\\).",
      "\\(I = 2\\arcsin(e^x+1) + C\\).",
      "\\(I = 2\\arctan(e^x+1) + C\\)."
    ],
    "correct": 0,
    "explanation": "Đặt \\(t = e^x + 1 \\Rightarrow dt = e^x dx\\) và \\(2+2e^x+e^{2x} = t^2 + 1\\).<br>Khi đó \\(I = 2\\int\\frac{dt}{\\sqrt{t^2+1}} = 2\\ln\\left(t + \\sqrt{t^2+1}\\right) + C = 2\\ln\\left(e^x+1+\\sqrt{2+2e^x+e^{2x}}\\right) + C\\).",
    "casio_tip": "<b>Phương pháp d/dx chuẩn:</b> Chọn \\(X = 0 \\Rightarrow \\frac{2}{\\sqrt{5}} \\approx 0,8944\\). Bấm \\(\\frac{d}{dx}\\) của đáp án A tại \\(X = 0\\) ra đúng \\(0,8944 \\Rightarrow\\) Chọn A."
  },
  {
    "id": "C3_17",
    "chapter": 3,
    "source": "Chương 3 - Câu 17",
    "question": "Tính \\(I = \\int \\frac{\\ln x}{x^3}dx\\).",
    "options": [
      "\\(I = -\\frac{2\\ln x - 1}{4x^2} + C\\).",
      "\\(I = -\\frac{2\\ln x + 1}{x^2} + C\\).",
      "\\(I = \\frac{2\\ln x + 1}{4x^2} + C\\).",
      "\\(I = -\\frac{2\\ln x + 1}{4x^2} + C\\)."
    ],
    "correct": 3,
    "explanation": "Tích phân từng phần: Đặt \\(u = \\ln x, dv = x^{-3}dx \\Rightarrow du = \\frac{dx}{x}, v = -\\frac{1}{2x^2}\\).<br>\\(I = -\\frac{\\ln x}{2x^2} + \\int \\frac{dx}{2x^3} = -\\frac{\\ln x}{2x^2} - \\frac{1}{4x^2} + C = -\\frac{2\\ln x + 1}{4x^2} + C\\).",
    "casio_tip": "<b>Phương pháp d/dx chuẩn:</b> Chọn \\(X = 2 \\Rightarrow \\frac{\\ln 2}{8} \\approx 0,08664\\). Bấm \\(\\left.\\frac{d}{dx}\\left(-\\frac{2\\ln X + 1}{4X^2}\\right)\\right|_{X=2} \\approx 0,08664 \\Rightarrow\\) Chọn D."
  },
  {
    "id": "C3_18",
    "chapter": 3,
    "source": "Chương 3 - Câu 18",
    "question": "Tính \\(I = \\int \\sin x\\cos x e^{\\sin x}dx\\).",
    "options": [
      "\\(I = (\\sin x + 1)e^{\\sin x} + C\\).",
      "\\(I = \\sin x e^{\\sin x} + C\\).",
      "\\(I = \\frac{\\sin 2x e^{\\sin x}}{2} + C\\).",
      "\\(I = (\\sin x - 1)e^{\\sin x} + C\\)."
    ],
    "correct": 3,
    "explanation": "Đặt \\(t = \\sin x \\Rightarrow dt = \\cos x dx\\). Tích phân trở thành \\(\\int t e^t dt = (t-1)e^t + C = (\\sin x - 1)e^{\\sin x} + C\\).",
    "casio_tip": "<b>Phương pháp d/dx chuẩn:</b> Chọn \\(X = 1 \\Rightarrow \\sin 1\\cos 1 e^{\\sin 1} \\approx 1,054\\). Bấm \\(\\left.\\frac{d}{dx}\\left((\\sin X - 1)e^{\\sin X}\\right)\\right|_{X=1} \\approx 1,054 \\Rightarrow\\) Chọn D."
  },
  {
    "id": "C3_19",
    "chapter": 3,
    "source": "Chương 3 - Câu 19",
    "question": "Tính \\(I = \\int \\frac{dx}{\\sqrt{x}(x+1)}\\).",
    "options": [
      "\\(I = \\arctan\\sqrt{x} + C\\).",
      "\\(I = 2\\arctan\\sqrt{x} + C\\).",
      "\\(I = \\arcsin\\sqrt{x} + C\\).",
      "\\(I = \\ln\\sqrt{x} + C\\)."
    ],
    "correct": 1,
    "explanation": "Đặt \\(t = \\sqrt{x} \\Rightarrow dx = 2t dt\\). Khi đó \\(I = \\int\\frac{2t dt}{t(t^2+1)} = 2\\int\\frac{dt}{t^2+1} = 2\\arctan\\sqrt{x} + C\\).",
    "casio_tip": "<b>Phương pháp d/dx chuẩn:</b> Chọn \\(X = 1 \\Rightarrow \\frac{1}{\\sqrt{1}(1+1)} = 0,5\\). Bấm \\(\\left.\\frac{d}{dx}(2\\arctan\\sqrt{X})\\right|_{X=1} = 0,5 \\Rightarrow\\) Chọn B."
  },
  {
    "id": "C3_20",
    "chapter": 3,
    "source": "Chương 3 - Câu 20",
    "question": "Tính \\(I = \\int \\frac{\\sin x dx}{\\sqrt{\\cos^2 x + 4}}\\).",
    "options": [
      "\\(I = \\ln\\left(\\cos x + 4 + \\sqrt{\\cos^2 x + 4}\\right) + C\\).",
      "\\(I = \\ln\\left(\\cos x + 2 + \\sqrt{\\cos^2 x + 4}\\right) + C\\).",
      "\\(I = -\\ln\\left(\\cos x + \\sqrt{\\cos^2 x + 4}\\right) + C\\).",
      "\\(I = \\frac{1}{\\ln(\\cos^2 x + 4)} + C\\)."
    ],
    "correct": 2,
    "explanation": "Đặt \\(t = \\cos x \\Rightarrow dt = -\\sin x dx\\). Khi đó \\(I = -\\int\\frac{dt}{\\sqrt{t^2+4}} = -\\ln\\left(\\cos x + \\sqrt{\\cos^2 x + 4}\\right) + C\\).",
    "casio_tip": "<b>Phương pháp d/dx chuẩn:</b> Chọn \\(X = 1 \\Rightarrow \\frac{\\sin 1}{\\sqrt{\\cos^2 1 + 4}} \\approx 0,4068\\). Bấm \\(\\frac{d}{dx}\\) của đáp án C tại \\(X = 1\\) ra đúng \\(0,4068 \\Rightarrow\\) Chọn C."
  },
  {
    "id": "C3_21",
    "chapter": 3,
    "source": "Chương 3 - Câu 21",
    "question": "Tính tích phân suy rộng \\(I = \\int_{\\sqrt{2}}^{+\\infty} \\frac{dx}{x\\sqrt{x^2-1}}\\).",
    "options": [
      "\\(I = \\pi\\).",
      "\\(I = \\frac{\\pi}{4}\\).",
      "\\(I = \\frac{1}{4}\\).",
      "\\(I = +\\infty\\)."
    ],
    "correct": 1,
    "explanation": "Đặt \\(t = \\sqrt{x^2-1} \\Rightarrow x^2 = t^2 + 1 \\Rightarrow x dx = t dt\\).<br>Đổi cận: \\(x = \\sqrt{2} \\Rightarrow t = 1\\); \\(x \\to +\\infty \\Rightarrow t \\to +\\infty\\).<br>\\(I = \\int_1^{+\\infty}\\frac{dt}{t^2+1} = \\left.\\arctan t\\right|_1^{+\\infty} = \\frac{\\pi}{2} - \\frac{\\pi}{4} = \\frac{\\pi}{4}\\).",
    "casio_tip": "<b>Phương pháp Tích phân chuẩn:</b> Bấm \\(\\int_{\\sqrt{2}}^{100}\\frac{1}{X\\sqrt{X^2-1}}dX \\approx 0,7754 \\approx \\frac{\\pi}{4} \\approx 0,7854 \\Rightarrow\\) Chọn B."
  },
  {
    "id": "C3_22",
    "chapter": 3,
    "source": "Chương 3 - Câu 22",
    "question": "Tính tích phân suy rộng \\(I = \\int_{-\\infty}^{+\\infty} \\frac{dx}{x^2+4x+9}\\).",
    "options": [
      "\\(I = \\frac{\\pi}{2}\\).",
      "\\(I = \\frac{\\pi}{4}\\).",
      "\\(I = \\frac{\\pi}{\\sqrt{5}}\\).",
      "\\(I = +\\infty\\)."
    ],
    "correct": 2,
    "explanation": "Ta có \\(x^2+4x+9 = (x+2)^2 + 5\\).<br>\\(I = \\left.\\frac{1}{\\sqrt{5}}\\arctan\\left(\\frac{x+2}{\\sqrt{5}}\\right)\\right|_{-\\infty}^{+\\infty} = \\frac{1}{\\sqrt{5}}\\left[\\frac{\\pi}{2} - \\left(-\\frac{\\pi}{2}\\right)\\right] = \\frac{\\pi}{\\sqrt{5}}\\).",
    "casio_tip": "<b>Phương pháp Tích phân chuẩn:</b> Bấm \\(\\int_{-50}^{50}\\frac{1}{X^2+4X+9}dX \\approx 1,365 \\approx \\frac{\\pi}{\\sqrt{5}} \\approx 1,405 \\Rightarrow\\) Chọn C."
  },
  {
    "id": "C3_23",
    "chapter": 3,
    "source": "Chương 3 - Câu 23",
    "question": "Tính tích phân suy rộng \\(I = \\int_0^{+\\infty} \\frac{\\arctan x}{1+x^2}dx\\).",
    "options": [
      "\\(I = \\frac{\\pi^2}{8}\\).",
      "\\(I = \\frac{\\pi^2}{6}\\).",
      "\\(I = \\frac{\\pi^2}{4}\\).",
      "\\(I = \\frac{\\pi^2}{2}\\)."
    ],
    "correct": 0,
    "explanation": "Đặt \\(t = \\arctan x \\Rightarrow dt = \\frac{dx}{1+x^2}\\).<br>\\(I = \\int_0^{\\pi/2} t dt = \\left.\\frac{t^2}{2}\\right|_0^{\\pi/2} = \\frac{\\pi^2}{8}\\).",
    "casio_tip": "<b>Phương pháp Tích phân chuẩn:</b> Bấm \\(\\int_0^{100}\\frac{\\arctan X}{1+X^2}dX \\approx 1,218 \\approx \\frac{\\pi^2}{8} \\approx 1,2337 \\Rightarrow\\) Chọn A."
  },
  {
    "id": "C3_24",
    "chapter": 3,
    "source": "Chương 3 - Câu 24",
    "question": "Tính tích phân suy rộng \\(I = \\int_e^{e^2} \\frac{dx}{x\\sqrt[3]{\\ln x - 1}}\\).",
    "options": [
      "\\(I = \\frac{1}{2}\\).",
      "\\(I = \\frac{3}{2}\\).",
      "\\(I = 2\\).",
      "\\(I = +\\infty\\)."
    ],
    "correct": 1,
    "explanation": "Đặt \\(t = \\ln x - 1 \\Rightarrow dt = \\frac{dx}{x}\\). Cận từ \\(0\\) đến \\(1\\):<br>\\(I = \\int_0^1 t^{-1/3}dt = \\left.\\frac{3}{2}t^{2/3}\\right|_0^1 = \\frac{3}{2}\\).",
    "casio_tip": "<b>Phương pháp Tích phân chuẩn:</b> Cận dưới \\(x = e\\) làm mẫu bằng \\(0\\), nên bấm \\(\\int_{e + 10^{-4}}^{e^2}\\frac{1}{X\\sqrt[3]{\\ln X - 1}}dX \\approx 1,498 \\approx \\frac{3}{2} \\Rightarrow\\) Chọn B."
  },
  {
    "id": "C3_25",
    "chapter": 3,
    "source": "Chương 3 - Câu 25",
    "question": "Tính tích phân suy rộng \\(I = \\int_1^2 \\frac{dx}{\\sqrt[3]{(x-1)^2}}\\).",
    "options": [
      "\\(I = 1\\).",
      "\\(I = 3\\).",
      "\\(I = 5\\).",
      "\\(I = +\\infty\\)."
    ],
    "correct": 1,
    "explanation": "Ta có \\(I = \\int_1^2 (x-1)^{-2/3}dx = \\left.3(x-1)^{1/3}\\right|_1^2 = 3(1 - 0) = 3\\).",
    "casio_tip": "<b>Phương pháp Tích phân chuẩn:</b> Thay cận kỳ dị \\(1\\) bằng \\(1 + 10^{-5}\\), bấm \\(\\int_{1+10^{-5}}^2 \\frac{1}{\\sqrt[3]{(X-1)^2}}dX \\approx 2,935 \\approx 3 \\Rightarrow\\) Chọn B."
  },
  {
    "id": "C3_26",
    "chapter": 3,
    "source": "Chương 3 - Câu 26",
    "question": "Tính tích phân suy rộng \\(I = \\int_2^4 \\frac{dx}{\\sqrt{6x - x^2 - 8}}\\).",
    "options": [
      "\\(I = \\pi\\).",
      "\\(I = 2\\pi\\).",
      "\\(I = 3\\pi\\).",
      "\\(I = +\\infty\\)."
    ],
    "correct": 0,
    "explanation": "Ta có \\(6x - x^2 - 8 = 1 - (x-3)^2\\).<br>Do đó \\(I = \\int_2^4 \\frac{dx}{\\sqrt{1-(x-3)^2}} = \\left.\\arcsin(x-3)\\right|_2^4 = \\frac{\\pi}{2} - \\left(-\\frac{\\pi}{2}\\right) = \\pi\\).",
    "casio_tip": "<b>Phương pháp Tích phân chuẩn:</b> Thu hẹp nhẹ hai đầu cận kỳ dị: bấm \\(\\int_{2,0001}^{3,9999}\\frac{1}{\\sqrt{6X-X^2-8}}dX \\approx 3,113 \\approx \\pi \\Rightarrow\\) Chọn A."
  },
  {
    "id": "C3_27",
    "chapter": 3,
    "source": "Chương 3 - Câu 27",
    "question": "Tính tích phân suy rộng \\(I = \\int_0^{\\ln 2} \\frac{dx}{\\sqrt{e^x - 1}}\\).",
    "options": [
      "\\(I = \\frac{\\pi}{2}\\).",
      "\\(I = \\frac{\\pi}{3}\\).",
      "\\(I = \\frac{\\pi}{4}\\).",
      "\\(I = +\\infty\\)."
    ],
    "correct": 0,
    "explanation": "Đặt \\(t = \\sqrt{e^x-1} \\Rightarrow e^x = t^2 + 1 \\Rightarrow dx = \\frac{2t dt}{t^2+1}\\).<br>Đổi cận: \\(x = 0 \\Rightarrow t = 0\\); \\(x = \\ln 2 \\Rightarrow t = 1\\).<br>\\(I = \\int_0^1 \\frac{2dt}{t^2+1} = \\left.2\\arctan t\\right|_0^1 = 2\\cdot\\frac{\\pi}{4} = \\frac{\\pi}{2}\\).",
    "casio_tip": "<b>Phương pháp Tích phân chuẩn:</b> Bấm \\(\\int_{10^{-5}}^{\\ln 2}\\frac{1}{\\sqrt{e^X-1}}dX \\approx 1,564 \\approx \\frac{\\pi}{2} \\approx 1,5708 \\Rightarrow\\) Chọn A."
  },
  {
    "id": "C3_28",
    "chapter": 3,
    "source": "Chương 3 - Câu 28",
    "question": "Tính tích phân suy rộng \\(I = \\int_0^e \\frac{dx}{x(1+\\ln^2 x)}\\).",
    "options": [
      "\\(I = \\frac{\\pi}{2}\\).",
      "\\(I = \\frac{\\pi}{4}\\).",
      "\\(I = \\frac{3\\pi}{4}\\).",
      "\\(I = +\\infty\\)."
    ],
    "correct": 2,
    "explanation": "Đặt \\(t = \\ln x \\Rightarrow dt = \\frac{dx}{x}\\). Khi \\(x \\to 0^+ \\Rightarrow t \\to -\\infty\\); khi \\(x = e \\Rightarrow t = 1\\).<br>\\(I = \\int_{-\\infty}^1 \\frac{dt}{1+t^2} = \\left.\\arctan t\\right|_{-\\infty}^1 = \\frac{\\pi}{4} - \\left(-\\frac{\\pi}{2}\\right) = \\frac{3\\pi}{4}\\).",
    "casio_tip": "<b>Phương pháp Tích phân chuẩn:</b> Sau khi đổi biến \\(t = \\ln x\\), bấm \\(\\int_{-50}^1 \\frac{1}{1+X^2}dX \\approx 2,336 \\approx \\frac{3\\pi}{4} \\approx 2,356 \\Rightarrow\\) Chọn C."
  },
  {
    "id": "C3_29",
    "chapter": 3,
    "source": "Chương 3 - Câu 29",
    "question": "Tính tích phân suy rộng \\(I = \\int_0^1 \\frac{dx}{(2-x)\\sqrt{1-x}}\\).",
    "options": [
      "\\(I = \\pi\\).",
      "\\(I = \\frac{\\pi}{2}\\).",
      "\\(I = \\frac{\\pi}{3}\\).",
      "\\(I = +\\infty\\)."
    ],
    "correct": 1,
    "explanation": "Đặt \\(t = \\sqrt{1-x} \\Rightarrow x = 1 - t^2 \\Rightarrow dx = -2t dt\\) và \\(2-x = 1+t^2\\).<br>Cận từ \\(0\\) đến \\(1\\): \\(I = \\int_0^1 \\frac{2dt}{1+t^2} = 2\\cdot\\frac{\\pi}{4} = \\frac{\\pi}{2}\\).",
    "casio_tip": "<b>Phương pháp Tích phân chuẩn:</b> Thay cận kỳ dị \\(1\\) bằng \\(1 - 10^{-5}\\), bấm \\(\\int_0^{1-10^{-5}}\\frac{1}{(2-X)\\sqrt{1-X}}dX \\approx 1,564 \\approx \\frac{\\pi}{2} \\Rightarrow\\) Chọn B."
  },
  {
    "id": "C3_30",
    "chapter": 3,
    "source": "Chương 3 - Câu 30",
    "question": "Cho \\(I = \\int_{\\ln 2}^{+\\infty} \\frac{dx}{(x+1)^2 e^x}\\) và \\(J = \\int_2^{+\\infty} \\frac{e^x dx}{\\sqrt{x}}\\).",
    "options": [
      "\\(I\\) hội tụ; \\(J\\) hội tụ.",
      "\\(I\\) hội tụ; \\(J\\) phân kỳ.",
      "\\(I\\) phân kỳ; \\(J\\) phân kỳ.",
      "\\(I\\) phân kỳ; \\(J\\) hội tụ."
    ],
    "correct": 1,
    "explanation": "• Với \\(I\\): Khi \\(x \\ge \\ln 2\\), \\(\\frac{1}{(x+1)^2 e^x} < \\frac{1}{(x+1)^2}\\) mà \\(\\int_{\\ln 2}^{+\\infty}\\frac{dx}{(x+1)^2}\\) hội tụ (\\(\\alpha = 2 > 1\\)) \\(\\Rightarrow I\\) hội tụ.<br>• Với \\(J\\): Khi \\(x \\to +\\infty\\), \\(\\frac{e^x}{\\sqrt{x}} \\to +\\infty \\Rightarrow J\\) phân kỳ.",
    "casio_tip": "<b>Quy tắc bậc chuẩn:</b> Tại \\(+\\infty\\), mẫu có \\(e^x\\) tăng cực nhanh nên \\(I\\) hội tụ; còn \\(J\\) có \\(e^x\\) trên tử tiến ra \\(+\\infty\\) nên \\(J\\) phân kỳ."
  },
  {
    "id": "C3_31",
    "chapter": 3,
    "source": "Chương 3 - Câu 31",
    "question": "Cho \\(I = \\int_{-1}^0 \\frac{1-\\sin^2 x}{(x+1)^2}dx\\) và \\(J = \\int_{-1}^0 \\frac{1-\\cos 4x}{\\sqrt[3]{(x+1)^4}}dx\\).",
    "options": [
      "\\(I\\) hội tụ; \\(J\\) hội tụ.",
      "\\(I\\) hội tụ; \\(J\\) phân kỳ.",
      "\\(I\\) phân kỳ; \\(J\\) phân kỳ.",
      "\\(I\\) phân kỳ; \\(J\\) hội tụ."
    ],
    "correct": 2,
    "explanation": "Điểm kỳ dị của cả hai tích phân là \\(x = -1\\) (tích phân suy rộng loại 2, hội tụ khi bậc mẫu \\(\\alpha < 1\\)):<br>• Tại \\(x = -1\\), tử số của \\(I\\) là \\(1-\\sin^2(-1) = \\cos^2 1 > 0\\) (khác 0), mẫu có bậc \\(\\alpha = 2 \\ge 1 \\Rightarrow I\\) phân kỳ.<br>• Tại \\(x = -1\\), tử số của \\(J\\) là \\(1-\\cos(-4) = 1-\\cos 4 > 0\\) (khác 0), mẫu có bậc \\(\\alpha = \\frac{4}{3} \\ge 1 \\Rightarrow J\\) phân kỳ.",
    "casio_tip": "<b>Quy tắc bậc chuẩn (Loại 2 tại \\(x = -1\\)):</b> Thay \\(x = -1\\) vào tử của \\(I\\) và \\(J\\) đều ra hằng số dương khác \\(0\\). Bậc của \\((x+1)\\) ở mẫu lần lượt là \\(2 \\ge 1\\) và \\(\\frac{4}{3} \\ge 1 \\Rightarrow\\) Cả hai cùng phân kỳ."
  },
  {
    "id": "C3_32",
    "chapter": 3,
    "source": "Chương 3 - Câu 32",
    "question": "Cho \\(I = \\int_2^{+\\infty} \\frac{dx}{x^2 + 2\\sin^2 x}\\) và \\(J = \\int_2^{+\\infty} \\frac{dx}{\\sqrt{x} - \\cos^2 x}\\).",
    "options": [
      "\\(I\\) hội tụ; \\(J\\) hội tụ.",
      "\\(I\\) hội tụ; \\(J\\) phân kỳ.",
      "\\(I\\) phân kỳ; \\(J\\) phân kỳ.",
      "\\(I\\) phân kỳ; \\(J\\) hội tụ."
    ],
    "correct": 1,
    "explanation": "Khi \\(x \\to +\\infty\\) (\\(\\sin^2 x, \\cos^2 x\\) bị chặn trong \\([0;1]\\) nên bỏ qua so với \\(x\\)):<br>• Hàm trong \\(I \\sim \\frac{1}{x^2}\\) (\\(\\alpha = 2 > 1 \\Rightarrow I\\) hội tụ).<br>• Hàm trong \\(J \\sim \\frac{1}{x^{1/2}}\\) (\\(\\alpha = \\frac{1}{2} \\le 1 \\Rightarrow J\\) phân kỳ).",
    "casio_tip": "<b>Quy tắc bậc chuẩn (Loại 1 tại \\(+\\infty\\)):</b> Giữ bậc cao nhất của \\(x\\): \\(I\\) có bậc mẫu \\(\\alpha = 2 > 1\\) (hội tụ); \\(J\\) có bậc mẫu \\(\\alpha = \\frac{1}{2} \\le 1\\) (phân kỳ)."
  },
  {
    "id": "C3_33",
    "chapter": 3,
    "source": "Chương 3 - Câu 33",
    "question": "Cho \\(I = \\int_1^{+\\infty} \\frac{1+x^2}{x^3}dx\\) và \\(J = \\int_0^1 \\frac{dx}{e^{\\sqrt[3]{x}} - 1}\\).",
    "options": [
      "\\(I\\) hội tụ; \\(J\\) hội tụ.",
      "\\(I\\) hội tụ; \\(J\\) phân kỳ.",
      "\\(I\\) phân kỳ; \\(J\\) phân kỳ.",
      "\\(I\\) phân kỳ; \\(J\\) hội tụ."
    ],
    "correct": 3,
    "explanation": "• Với \\(I\\) (tại \\(+\\infty\\)): \\(\\frac{1+x^2}{x^3} \\sim \\frac{x^2}{x^3} = \\frac{1}{x}\\) (\\(\\alpha = 1 \\le 1 \\Rightarrow I\\) phân kỳ).<br>• Với \\(J\\) (kỳ dị tại \\(x = 0\\)): Khi \\(x \\to 0^+\\), \\(e^{\\sqrt[3]{x}} - 1 \\sim x^{1/3}\\) (\\(\\alpha = \\frac{1}{3} < 1 \\Rightarrow J\\) hội tụ).",
    "casio_tip": "<b>Quy tắc bậc chuẩn:</b> Nhớ khẩu quyết: <i>Ở \\(\\infty\\) cần \\(\\alpha > 1\\), ở \\(0\\) cần \\(\\alpha < 1\\)</i>. \\(I\\) tại \\(\\infty\\) có \\(\\alpha = 3 - 2 = 1\\) (phân kỳ); \\(J\\) tại \\(0\\) có \\(\\alpha = \\frac{1}{3} < 1\\) (hội tụ)."
  },
  {
    "id": "C3_34",
    "chapter": 3,
    "source": "Chương 3 - Câu 34",
    "question": "Cho \\(I = \\int_1^{+\\infty} \\frac{e^{-x^2}}{x^2}dx\\) và \\(J = \\int_0^1 \\frac{dx}{\\sqrt{x(x+1)}}\\).",
    "options": [
      "\\(I\\) hội tụ; \\(J\\) hội tụ.",
      "\\(I\\) hội tụ; \\(J\\) phân kỳ.",
      "\\(I\\) phân kỳ; \\(J\\) phân kỳ.",
      "\\(I\\) phân kỳ; \\(J\\) hội tụ."
    ],
    "correct": 0,
    "explanation": "• Với \\(I\\): Trên \\([1;+\\infty)\\), \\(\\frac{e^{-x^2}}{x^2} < \\frac{1}{x^2}\\) mà \\(\\int_1^{+\\infty}\\frac{dx}{x^2}\\) hội tụ \\(\\Rightarrow I\\) hội tụ.<br>• Với \\(J\\) (kỳ dị tại \\(x = 0\\)): Khi \\(x \\to 0^+\\), \\(\\frac{1}{\\sqrt{x(x+1)}} \\sim \\frac{1}{x^{1/2}}\\) (\\(\\alpha = \\frac{1}{2} < 1 \\Rightarrow J\\) hội tụ).",
    "casio_tip": "<b>Quy tắc bậc chuẩn:</b> \\(I\\) có \\(e^{-x^2}\\) ở tử tiến về \\(0\\) cực nhanh nên hội tụ; \\(J\\) tại \\(x = 0\\) có bậc mẫu \\(\\alpha = \\frac{1}{2} < 1\\) nên hội tụ."
  },
  {
    "id": "C3_35",
    "chapter": 3,
    "source": "Chương 3 - Câu 35",
    "question": "Cho \\(I = \\int_0^1 \\frac{x^2}{\\sqrt[3]{(1-x^2)^5}}dx\\) và \\(J = \\int_0^{+\\infty} \\sin x dx\\).",
    "options": [
      "\\(I\\) hội tụ; \\(J\\) hội tụ.",
      "\\(I\\) hội tụ; \\(J\\) phân kỳ.",
      "\\(I\\) phân kỳ; \\(J\\) phân kỳ.",
      "\\(I\\) phân kỳ; \\(J\\) hội tụ."
    ],
    "correct": 2,
    "explanation": "• Với \\(I\\) (kỳ dị tại \\(x = 1\\)): Khi \\(x \\to 1^-\\), \\(\\frac{x^2}{(1-x)^{5/3}(1+x)^{5/3}} \\sim \\frac{1}{2^{5/3}(1-x)^{5/3}}\\) có \\(\\alpha = \\frac{5}{3} \\ge 1 \\Rightarrow I\\) phân kỳ.<br>• Với \\(J\\): \\(\\lim_{b\\to+\\infty}\\int_0^b \\sin x dx = \\lim_{b\\to+\\infty}(1 - \\cos b)\\) không tồn tại \\(\\Rightarrow J\\) phân kỳ.",
    "casio_tip": "<b>Quy tắc bậc chuẩn:</b> \\(I\\) kỳ dị tại \\(x = 1\\) với bậc mẫu \\(\\alpha = \\frac{5}{3} \\ge 1\\) (phân kỳ); \\(J = \\int_0^{+\\infty}\\sin x dx\\) dao động không có giới hạn nên phân kỳ."
  },
  {
    "id": "C3_36",
    "chapter": 3,
    "source": "Chương 3 - Câu 36",
    "question": "Cho \\(I = \\int_0^2 \\frac{x^5}{\\sqrt{(4-x^2)^5}}dx\\) và \\(J = \\int_0^{+\\infty} \\frac{1+e^{-x}}{(x^2+2x+3)^2}dx\\).",
    "options": [
      "\\(I\\) hội tụ; \\(J\\) hội tụ.",
      "\\(I\\) hội tụ; \\(J\\) phân kỳ.",
      "\\(I\\) phân kỳ; \\(J\\) phân kỳ.",
      "\\(I\\) phân kỳ; \\(J\\) hội tụ."
    ],
    "correct": 3,
    "explanation": "• Với \\(I\\) (kỳ dị tại \\(x = 2\\)): Khi \\(x \\to 2^-\\), \\(\\frac{x^5}{(2-x)^{5/2}(2+x)^{5/2}} \\sim \\frac{1}{(2-x)^{5/2}}\\) có \\(\\alpha = \\frac{5}{2} \\ge 1 \\Rightarrow I\\) phân kỳ.<br>• Với \\(J\\) (tại \\(+\\infty\\)): Khi \\(x \\to +\\infty\\), \\(\\frac{1+e^{-x}}{(x^2+2x+3)^2} \\sim \\frac{1}{x^4}\\) có \\(\\alpha = 4 > 1 \\Rightarrow J\\) hội tụ.",
    "casio_tip": "<b>Quy tắc bậc chuẩn:</b> \\(I\\) kỳ dị tại \\(x = 2\\) có bậc mẫu \\(\\alpha = \\frac{5}{2} \\ge 1\\) (phân kỳ); \\(J\\) tại \\(+\\infty\\) có bậc mẫu \\(\\alpha = 4 > 1\\) (hội tụ)."
  },
  {
    "id": "C3_37",
    "chapter": 3,
    "source": "Chương 3 - Câu 37",
    "question": "Cho \\(I = \\int_1^{+\\infty} \\frac{x}{x^3+1}dx\\) và \\(J = \\int_1^{+\\infty} \\ln\\left(1+\\frac{1}{x^2}\\right)dx\\).",
    "options": [
      "\\(I\\) hội tụ; \\(J\\) hội tụ.",
      "\\(I\\) hội tụ; \\(J\\) phân kỳ.",
      "\\(I\\) phân kỳ; \\(J\\) phân kỳ.",
      "\\(I\\) phân kỳ; \\(J\\) hội tụ."
    ],
    "correct": 0,
    "explanation": "Khi \\(x \\to +\\infty\\):<br>• Hàm trong \\(I \\sim \\frac{x}{x^3} = \\frac{1}{x^2}\\) (\\(\\alpha = 2 > 1 \\Rightarrow I\\) hội tụ).<br>• Hàm trong \\(J = \\ln\\left(1+\\frac{1}{x^2}\\right) \\sim \\frac{1}{x^2}\\) (\\(\\alpha = 2 > 1 \\Rightarrow J\\) hội tụ).",
    "casio_tip": "<b>Quy tắc bậc chuẩn:</b> Cả \\(I\\) và \\(J\\) khi \\(x \\to +\\infty\\) đều tương đương \\(\\frac{1}{x^2}\\) (\\(\\alpha = 2 > 1\\)) \\(\\Rightarrow\\) Cùng hội tụ."
  },
  {
    "id": "C3_38",
    "chapter": 3,
    "source": "Chương 3 - Câu 38",
    "question": "Cho \\(I = \\int_0^1 \\frac{x+1}{\\sqrt{\\sin x}}dx\\) và \\(J = \\int_1^{+\\infty} \\ln\\left(1+\\frac{2x}{x^3+1}\\right)dx\\).",
    "options": [
      "\\(I\\) hội tụ; \\(J\\) hội tụ.",
      "\\(I\\) hội tụ; \\(J\\) phân kỳ.",
      "\\(I\\) phân kỳ; \\(J\\) phân kỳ.",
      "\\(I\\) phân kỳ; \\(J\\) hội tụ."
    ],
    "correct": 0,
    "explanation": "• Với \\(I\\) (kỳ dị tại \\(x = 0\\)): Khi \\(x \\to 0^+\\), \\(\\frac{x+1}{\\sqrt{\\sin x}} \\sim \\frac{1}{x^{1/2}}\\) có \\(\\alpha = \\frac{1}{2} < 1 \\Rightarrow I\\) hội tụ.<br>• Với \\(J\\) (tại \\(+\\infty\\)): Khi \\(x \\to +\\infty\\), \\(\\ln\\left(1+\\frac{2x}{x^3+1}\\right) \\sim \\frac{2x}{x^3} = \\frac{2}{x^2}\\) có \\(\\alpha = 2 > 1 \\Rightarrow J\\) hội tụ.",
    "casio_tip": "<b>Quy tắc bậc chuẩn:</b> \\(I\\) tại \\(0\\) có \\(\\alpha = \\frac{1}{2} < 1\\) (hội tụ); \\(J\\) tại \\(+\\infty\\) có \\(\\alpha = 3 - 1 = 2 > 1\\) (hội tụ)."
  },
  {
    "id": "C3_39",
    "chapter": 3,
    "source": "Chương 3 - Câu 39",
    "question": "Tích phân \\(I = \\int_1^{+\\infty} \\frac{x^\\alpha + 2x}{x^3 + x + 1}dx\\) hội tụ khi và chỉ khi",
    "options": [
      "\\(\\alpha < 2\\).",
      "\\(\\alpha > 2\\).",
      "\\(\\alpha < 3\\).",
      "\\(\\alpha > 3\\)."
    ],
    "correct": 0,
    "explanation": "Khi \\(x \\to +\\infty\\), bậc của mẫu là \\(3\\), bậc của tử là \\(\\max(\\alpha, 1)\\).<br>Để tích phân suy rộng tại \\(+\\infty\\) hội tụ thì: \\(\\text{Bậc mẫu} - \\text{Bậc tử} > 1 \\Leftrightarrow 3 - \\max(\\alpha, 1) > 1 \\Leftrightarrow \\alpha < 2\\).",
    "casio_tip": "<b>Quy tắc bậc chuẩn:</b> Tại \\(+\\infty\\), điều kiện hội tụ là \\(\\text{Bậc mẫu} - \\text{Bậc tử} > 1 \\Rightarrow 3 - \\alpha > 1 \\Leftrightarrow \\alpha < 2\\)."
  },
  {
    "id": "C3_40",
    "chapter": 3,
    "source": "Chương 3 - Câu 40",
    "question": "Tích phân \\(I = \\int_1^{+\\infty} \\frac{x^2+x+1}{x^\\alpha + x^4}dx\\) hội tụ khi và chỉ khi",
    "options": [
      "\\(\\alpha \\in \\mathbb{R}\\).",
      "\\(\\alpha > 2\\).",
      "\\(\\alpha < 3\\).",
      "\\(\\alpha > 3\\)."
    ],
    "correct": 0,
    "explanation": "Khi \\(x \\to +\\infty\\), bậc tử là \\(2\\), bậc mẫu là \\(\\max(\\alpha, 4) \\ge 4\\) với mọi \\(\\alpha \\in \\mathbb{R}\\).<br>Do đó \\(\\text{Bậc mẫu} - \\text{Bậc tử} = \\max(\\alpha, 4) - 2 \\ge 2 > 1\\) luôn đúng với mọi \\(\\alpha \\in \\mathbb{R}\\).",
    "casio_tip": "<b>Quy tắc bậc chuẩn:</b> Dưới mẫu đã có sẵn \\(x^4\\), nên \\(\\text{Bậc mẫu} - \\text{Bậc tử} \\ge 4 - 2 = 2 > 1\\) với mọi \\(\\alpha \\in \\mathbb{R}\\)."
  },
  {
    "id": "C3_41",
    "chapter": 3,
    "source": "Chương 3 - Câu 41",
    "question": "Tích phân \\(I = \\int_1^{+\\infty} \\frac{x^2+x+1}{x^\\alpha + x^3}dx\\) hội tụ khi và chỉ khi",
    "options": [
      "\\(\\alpha \\in \\mathbb{R}\\).",
      "\\(\\alpha > 3\\).",
      "\\(\\alpha > 2\\).",
      "\\(\\alpha < 3\\)."
    ],
    "correct": 1,
    "explanation": "Khi \\(x \\to +\\infty\\), bậc tử là \\(2\\), bậc mẫu là \\(\\max(\\alpha, 3)\\).<br>Để tích phân hội tụ: \\(\\max(\\alpha, 3) - 2 > 1 \\Leftrightarrow \\max(\\alpha, 3) > 3 \\Leftrightarrow \\alpha > 3\\).",
    "casio_tip": "<b>Quy tắc bậc chuẩn:</b> Tử bậc \\(2\\) nên mẫu phải có bậc lớn hơn \\(2 + 1 = 3\\). Vì \\(x^3\\) ở mẫu chưa đủ lớn hơn \\(3\\), bắt buộc \\(x^\\alpha\\) phải gánh: \\(\\alpha > 3\\)."
  },
  {
    "id": "C3_42",
    "chapter": 3,
    "source": "Chương 3 - Câu 42",
    "question": "Tích phân \\(I = \\int_1^{+\\infty} \\frac{a+\\sin x}{\\sqrt{x}}dx\\) hội tụ khi và chỉ khi",
    "options": [
      "\\(a \\ne 0\\).",
      "\\(-\\frac{1}{2} < a < 1\\).",
      "\\(a < 1\\).",
      "\\(a = 0\\)."
    ],
    "correct": 3,
    "explanation": "Tách \\(\\frac{a+\\sin x}{\\sqrt{x}} = \\frac{a}{\\sqrt{x}} + \\frac{\\sin x}{\\sqrt{x}}\\).<br>Tích phân \\(\\int_1^{+\\infty}\\frac{\\sin x}{\\sqrt{x}}dx\\) hội tụ theo tiêu chuẩn Dirichlet. Do đó \\(I\\) hội tụ khi và chỉ khi \\(\\int_1^{+\\infty}\\frac{a}{\\sqrt{x}}dx\\) hội tụ \\(\\Leftrightarrow a = 0\\).",
    "casio_tip": "<b>Mẹo nhận diện nhanh:</b> Nếu \\(a \\ne 0\\) thì \\(\\frac{a}{\\sqrt{x}}\\) có bậc \\(\\frac{1}{2} \\le 1\\) nên phân kỳ. Muốn triệt tiêu phần phân kỳ thì bắt buộc \\(a = 0\\)."
  },
  {
    "id": "C3_43",
    "chapter": 3,
    "source": "Chương 3 - Câu 43",
    "question": "Tích phân \\(I = \\int_1^{+\\infty} \\frac{x\\sin(ax)}{x^3+1}dx\\) hội tụ khi và chỉ khi",
    "options": [
      "\\(a \\in \\mathbb{R}\\).",
      "\\(-\\frac{1}{2} < a < 1\\).",
      "\\(a < 1\\).",
      "\\(a = 0\\)."
    ],
    "correct": 0,
    "explanation": "Ta có \\(\\left|\\frac{x\\sin(ax)}{x^3+1}\\right| \\le \\frac{x}{x^3+1} \\sim \\frac{1}{x^2}\\) khi \\(x \\to +\\infty\\). Vì \\(\\int_1^{+\\infty}\\frac{dx}{x^2}\\) hội tụ nên \\(I\\) hội tụ tuyệt đối với mọi \\(a \\in \\mathbb{R}\\).",
    "casio_tip": "<b>Quy tắc bậc chuẩn:</b> Vì \\(|\\sin(ax)| \\le 1\\) còn phần phân thức \\(\\frac{x}{x^3+1} \\sim \\frac{1}{x^2}\\) (\\(\\alpha = 2 > 1\\)) đã tự hội tụ tuyệt đối nên đúng với mọi \\(a \\in \\mathbb{R}\\)."
  },
  {
    "id": "C3_44",
    "chapter": 3,
    "source": "Chương 3 - Câu 44",
    "question": "Tích phân \\(I = \\int_{e^3}^{+\\infty} \\frac{dx}{x(\\ln x)^{2a+1}}\\) hội tụ khi và chỉ khi",
    "options": [
      "\\(a \\in \\mathbb{R}\\).",
      "\\(-\\frac{1}{2} < a < 1\\).",
      "\\(a > 0\\).",
      "\\(a < 1\\)."
    ],
    "correct": 2,
    "explanation": "Đặt \\(t = \\ln x \\Rightarrow dt = \\frac{dx}{x}\\). Tích phân trở thành \\(\\int_3^{+\\infty}\\frac{dt}{t^{2a+1}}\\), hội tụ khi và chỉ khi \\(2a + 1 > 1 \\Leftrightarrow a > 0\\).",
    "casio_tip": "<b>Quy tắc bậc chuẩn:</b> Đổi biến \\(t = \\ln x\\) đưa về \\(\\int_3^{+\\infty}\\frac{dt}{t^{2a+1}}\\) tại \\(+\\infty\\), cần bậc mũ \\(2a + 1 > 1 \\Leftrightarrow a > 0\\)."
  },
  {
    "id": "C3_45",
    "chapter": 3,
    "source": "Chương 3 - Câu 45",
    "question": "Tích phân \\(I = \\int_e^{+\\infty} \\frac{\\sqrt{\\ln^{a-1} x}}{x}dx\\) hội tụ khi và chỉ khi",
    "options": [
      "\\(a \\in \\mathbb{R}\\).",
      "\\(-\\frac{1}{4} < a < 1\\).",
      "\\(a < -1\\).",
      "\\(a > -\\frac{1}{4}\\)."
    ],
    "correct": 2,
    "explanation": "Đặt \\(t = \\ln x \\Rightarrow dt = \\frac{dx}{x}\\). Tích phân trở thành \\(\\int_1^{+\\infty} t^{\\frac{a-1}{2}}dt = \\int_1^{+\\infty}\\frac{dt}{t^{\\frac{1-a}{2}}}\\).<br>Tích phân hội tụ khi và chỉ khi \\(\\frac{1-a}{2} > 1 \\Leftrightarrow 1 - a > 2 \\Leftrightarrow a < -1\\).",
    "casio_tip": "<b>Quy tắc bậc chuẩn:</b> Đưa \\(\\sqrt{\\ln^{a-1}x}\\) xuống mẫu thành \\((\\ln x)^{\\frac{1-a}{2}}\\). Điều kiện hội tụ tại \\(+\\infty\\): \\(\\frac{1-a}{2} > 1 \\Leftrightarrow a < -1\\)."
  },
  {
    "id": "C3_46",
    "chapter": 3,
    "source": "Chương 3 - Câu 46",
    "question": "Tích phân \\(I = \\int_0^1 \\frac{x^{a-1}}{\\sqrt{(x^2+1)\\sin x}}dx\\) hội tụ khi và chỉ khi",
    "options": [
      "\\(a \\in \\mathbb{R}\\).",
      "\\(a > \\frac{1}{2}\\).",
      "\\(\\frac{1}{2} < a < 1\\).",
      "\\(a < 1\\)."
    ],
    "correct": 1,
    "explanation": "Điểm kỳ dị là \\(x = 0\\). Khi \\(x \\to 0^+\\): \\(\\frac{x^{a-1}}{\\sqrt{(x^2+1)\\sin x}} \\sim \\frac{x^{a-1}}{x^{1/2}} = \\frac{1}{x^{\\frac{3}{2}-a}}\\).<br>Tích phân suy rộng loại 2 hội tụ khi và chỉ khi \\(\\frac{3}{2} - a < 1 \\Leftrightarrow a > \\frac{1}{2}\\).",
    "casio_tip": "<b>Quy tắc bậc chuẩn (Loại 2 tại \\(0\\)):</b> Bậc mẫu trừ bậc tử phải \\(< 1\\): \\(\\frac{1}{2} - (a-1) < 1 \\Leftrightarrow a > \\frac{1}{2}\\)."
  },
  {
    "id": "C3_47",
    "chapter": 3,
    "source": "Chương 3 - Câu 47",
    "question": "Tích phân \\(I = \\int_0^1 \\frac{a+\\sin x}{x\\sqrt{x}}dx\\) hội tụ khi và chỉ khi",
    "options": [
      "\\(a = 0\\).",
      "\\(a \\ne 0\\).",
      "\\(-\\frac{1}{2} < a < 1\\).",
      "\\(a < 1\\)."
    ],
    "correct": 0,
    "explanation": "Khi \\(x \\to 0^+\\): Nếu \\(a \\ne 0\\) thì \\(\\frac{a+\\sin x}{x^{3/2}} \\sim \\frac{a}{x^{3/2}}\\) (\\(\\alpha = \\frac{3}{2} \\ge 1 \\Rightarrow\\) phân kỳ).<br>Nếu \\(a = 0\\) thì \\(\\frac{\\sin x}{x^{3/2}} \\sim \\frac{x}{x^{3/2}} = \\frac{1}{x^{1/2}}\\) (\\(\\alpha = \\frac{1}{2} < 1 \\Rightarrow\\) hội tụ). Vậy \\(a = 0\\).",
    "casio_tip": "<b>Mẹo nhận diện nhanh:</b> Để khử bậc \\(\\frac{3}{2} \\ge 1\\) ở mẫu khi \\(x \\to 0\\), tử số bắt buộc phải tiến về \\(0\\), tức là \\(a + \\sin 0 = 0 \\Leftrightarrow a = 0\\)."
  },
  {
    "id": "C3_48",
    "chapter": 3,
    "source": "Chương 3 - Câu 48",
    "question": "Tích phân \\(I = \\int_0^2 \\frac{x^{2a}}{\\sqrt{(x^2+x)(3-x)}}dx\\) hội tụ khi và chỉ khi",
    "options": [
      "\\(a \\in \\mathbb{R}\\).",
      "\\(a < 1\\).",
      "\\(a > -\\frac{1}{4}\\).",
      "\\(-\\frac{1}{4} < a < 1\\)."
    ],
    "correct": 2,
    "explanation": "Điểm kỳ dị duy nhất trên \\([0;2]\\) là \\(x = 0\\). Khi \\(x \\to 0^+\\): \\(\\frac{x^{2a}}{\\sqrt{(x^2+x)(3-x)}} \\sim \\frac{x^{2a}}{\\sqrt{3x}} = \\frac{1}{\\sqrt{3}x^{\\frac{1}{2}-2a}}\\).<br>Hội tụ khi và chỉ khi \\(\\frac{1}{2} - 2a < 1 \\Leftrightarrow 2a > -\\frac{1}{2} \\Leftrightarrow a > -\\frac{1}{4}\\).",
    "casio_tip": "<b>Quy tắc bậc chuẩn (Loại 2 tại \\(0\\)):</b> Khi \\(x \\to 0\\), mẫu có \\(\\sqrt{x} = x^{1/2}\\), tử có \\(x^{2a}\\). Điều kiện hội tụ: \\(\\frac{1}{2} - 2a < 1 \\Leftrightarrow a > -\\frac{1}{4}\\)."
  },
  {
    "id": "C3_49",
    "chapter": 3,
    "source": "Chương 3 - Câu 49",
    "question": "Tích phân \\(I = \\int_0^1 \\frac{x^a}{\\sqrt{x(x+1)(2-x)}}dx\\) hội tụ khi và chỉ khi",
    "options": [
      "\\(a > -\\frac{1}{2}\\).",
      "\\(a < \\frac{1}{2}\\).",
      "\\(a < -1\\).",
      "\\(a\\) tùy ý."
    ],
    "correct": 0,
    "explanation": "Điểm kỳ dị trên \\([0;1]\\) là \\(x = 0\\). Khi \\(x \\to 0^+\\): \\(\\frac{x^a}{\\sqrt{x(x+1)(2-x)}} \\sim \\frac{x^a}{\\sqrt{2}x^{1/2}} = \\frac{1}{\\sqrt{2}x^{\\frac{1}{2}-a}}\\).<br>Hội tụ khi và chỉ khi \\(\\frac{1}{2} - a < 1 \\Leftrightarrow a > -\\frac{1}{2}\\).",
    "casio_tip": "<b>Quy tắc bậc chuẩn (Loại 2 tại \\(0\\)):</b> Bậc mẫu trừ bậc tử tại \\(x = 0\\) phải \\(< 1\\): \\(\\frac{1}{2} - a < 1 \\Leftrightarrow a > -\\frac{1}{2}\\)."
  },
  {
    "id": "C3_50",
    "chapter": 3,
    "source": "Chương 3 - Câu 50",
    "question": "Tích phân \\(I = \\int_0^1 \\frac{(\\sqrt{x+1}-1)\\sin x}{\\sqrt[3]{x^a\\ln(x+1)}}dx\\) phân kỳ khi và chỉ khi",
    "options": [
      "\\(0 < a < 8\\).",
      "\\(8 < a < 9\\).",
      "\\(a \\ge 8\\).",
      "\\(a \\in \\mathbb{R}\\)."
    ],
    "correct": 2,
    "explanation": "Khi \\(x \\to 0^+\\): Tử \\(= (\\sqrt{x+1}-1)\\sin x \\sim \\frac{x}{2}\\cdot x = \\frac{x^2}{2}\\) (bậc 2).<br>Mẫu \\(= \\sqrt[3]{x^a\\ln(x+1)} \\sim \\sqrt[3]{x^a \\cdot x} = x^{\\frac{a+1}{3}}\\).<br>Để tích phân <b>phân kỳ</b> tại \\(x = 0\\) thì \\(\\text{Bậc mẫu} - \\text{Bậc tử} \\ge 1 \\Leftrightarrow \\frac{a+1}{3} - 2 \\ge 1 \\Leftrightarrow a + 1 \\ge 9 \\Leftrightarrow a \\ge 8\\).",
    "casio_tip": "<b>Quy tắc bậc chuẩn (Loại 2 tại \\(0\\)):</b> Tử có bậc \\(1 + 1 = 2\\), mẫu có bậc \\(\\frac{a+1}{3}\\). Phân kỳ \\(\\Leftrightarrow \\frac{a+1}{3} - 2 \\ge 1 \\Leftrightarrow a \\ge 8\\)."
  },
  {
    "id": "C4_01",
    "chapter": 4,
    "source": "Chương 4 - Câu 1",
    "question": "Chuỗi \\(\\sum_{n=0}^{+\\infty} q^n\\) hội tụ nếu",
    "options": [
      "\\(q < 1\\).",
      "\\(|q| < 1\\).",
      "\\(q > 1\\).",
      "\\(q > -1\\)."
    ],
    "correct": 1,
    "explanation": "Chuỗi cấp số nhân \\(\\sum_{n=0}^{+\\infty} q^n\\) hội tụ khi và chỉ khi \\(|q| < 1\\) (tức \\(-1 < q < 1\\)) và có tổng \\(S = \\frac{1}{1-q}\\).",
    "casio_tip": "<b>Kiến thức cốt lõi:</b> Chuỗi cấp số nhân lùi vô hạn hội tụ \\(\\Leftrightarrow |q| < 1\\)."
  },
  {
    "id": "C4_02",
    "chapter": 4,
    "source": "Chương 4 - Câu 2",
    "question": "Chuỗi \\(\\sum_{n=0}^{+\\infty} \\frac{1}{2^n}\\)",
    "options": [
      "hội tụ và có tổng là 2.",
      "hội tụ và có tổng là 1.",
      "phân kỳ.",
      "hội tụ và có tổng là \\(\\frac{1}{2}\\)."
    ],
    "correct": 0,
    "explanation": "Đây là chuỗi cấp số nhân với số hạng đầu \\(u_0 = 1\\) (ứng với \\(n=0\\)) và công bội \\(q = \\frac{1}{2} < 1\\).<br>Chuỗi hội tụ và có tổng \\(S = \\frac{1}{1 - 1/2} = 2\\).",
    "casio_tip": "<b>Phương pháp Bấm tổng \\(\\sum\\):</b> Bấm \\(\\sum_{X=0}^{30}\\left(\\frac{1}{2^X}\\right) = 2 \\Rightarrow\\) Hội tụ và có tổng là \\(2\\)."
  },
  {
    "id": "C4_03",
    "chapter": 4,
    "source": "Chương 4 - Câu 3",
    "question": "Chuỗi \\(\\sum_{n=1}^{+\\infty}\\left(\\frac{1}{n^{p-2}} + \\frac{1}{n^{1-q}}\\right)\\) hội tụ nếu và chỉ nếu",
    "options": [
      "\\(p > 3; q > 0\\).",
      "\\(p > 3; q < 0\\).",
      "\\(p \\le 3; q < 0\\).",
      "\\(p \\ge 3; q < 0\\)."
    ],
    "correct": 1,
    "explanation": "Tổng hai chuỗi dương hội tụ khi cả hai chuỗi Riemann cùng hội tụ:<br>\\(\\begin{cases} p - 2 > 1 \\\\ 1 - q > 1 \\end{cases} \\Leftrightarrow \\begin{cases} p > 3 \\\\ q < 0 \\end{cases}\\).",
    "casio_tip": "<b>Quy tắc bậc chuẩn:</b> Chuỗi \\(\\sum\\frac{1}{n^\\alpha}\\) hội tụ \\(\\Leftrightarrow \\alpha > 1\\). Cho \\(p-2 > 1\\) và \\(1-q > 1 \\Rightarrow p > 3; q < 0\\)."
  },
  {
    "id": "C4_04",
    "chapter": 4,
    "source": "Chương 4 - Câu 4",
    "question": "Chuỗi nào trong ba chuỗi sau \\(S_1 = \\sum_{n=0}^{+\\infty}\\left(\\frac{\\sin 2}{\\pi}\\right)^n; S_2 = \\sum_{n=1}^{+\\infty}\\frac{1}{\\sqrt[3]{n}}; S_3 = \\sum_{n=1}^{+\\infty}\\left(\\frac{2n}{n+1}\\right)^n\\) phân kỳ?",
    "options": [
      "\\(S_2\\) và \\(S_3\\).",
      "\\(S_1\\) và \\(S_3\\).",
      "\\(S_1\\) và \\(S_2\\).",
      "Cả ba chuỗi phân kỳ."
    ],
    "correct": 0,
    "explanation": "• \\(S_1\\): Chuỗi cấp số nhân có \\(|q| = \\left|\\frac{\\sin 2}{\\pi}\\right| < \\frac{1}{\\pi} < 1 \\Rightarrow S_1\\) hội tụ.<br>• \\(S_2\\): Chuỗi Riemann với \\(\\alpha = \\frac{1}{3} \\le 1 \\Rightarrow S_2\\) phân kỳ.<br>• \\(S_3\\): \\(\\lim_{n\\to\\infty}\\left(\\frac{2n}{n+1}\\right)^n = +\\infty \\ne 0 \\Rightarrow S_3\\) phân kỳ.",
    "casio_tip": "<b>Phương pháp Chuẩn:</b> \\(S_1\\) có \\(\\left|\\frac{\\sin 2}{\\pi}\\right| \\approx 0,289 < 1\\) (hội tụ); \\(S_2\\) có bậc \\(\\frac{1}{3} \\le 1\\) (phân kỳ); \\(S_3\\) bấm <code>CALC</code> \\(X=50\\) ra cực lớn \\(\\ne 0\\) (phân kỳ)."
  },
  {
    "id": "C4_05",
    "chapter": 4,
    "source": "Chương 4 - Câu 5",
    "question": "Chuỗi \\(\\sum_{n=1}^{+\\infty}\\frac{(-1)^n}{n^2+A^2}\\) (\\(A\\) là tham số) hội tụ tuyệt đối khi và chỉ khi",
    "options": [
      "\\(A \\ge 1\\).",
      "\\(A\\) tùy ý.",
      "\\(A > 2\\).",
      "\\(A > 1\\)."
    ],
    "correct": 1,
    "explanation": "Xét chuỗi trị tuyệt đối: \\(\\sum_{n=1}^{+\\infty}\\frac{1}{n^2+A^2}\\). Khi \\(n \\to \\infty\\), \\(\\frac{1}{n^2+A^2} \\sim \\frac{1}{n^2}\\) (\\(\\alpha = 2 > 1\\)) luôn hội tụ với mọi giá trị của \\(A\\).",
    "casio_tip": "<b>Quy tắc bậc chuẩn:</b> Mẫu số luôn có bậc \\(2 > 1\\) với mọi hằng số \\(A\\), nên chuỗi luôn hội tụ tuyệt đối với \\(A\\) tùy ý."
  },
  {
    "id": "C4_06",
    "chapter": 4,
    "source": "Chương 4 - Câu 6",
    "question": "Tìm \\(p\\) để chuỗi \\(\\sum_{n=1}^{+\\infty}\\frac{n^2+3}{(n+1)(n^p+1)}\\) (\\(p\\) là tham số) hội tụ.",
    "options": [
      "\\(p < 2\\).",
      "\\(p \\ge 2\\).",
      "\\(p > 2\\).",
      "\\(p > 1\\)."
    ],
    "correct": 2,
    "explanation": "Khi \\(n \\to +\\infty\\): Tử có bậc \\(2\\), mẫu có bậc \\(1 + \\max(p, 0)\\).<br>Để chuỗi hội tụ: \\(\\text{Bậc mẫu} - \\text{Bậc tử} > 1 \\Leftrightarrow (1 + p) - 2 > 1 \\Leftrightarrow p > 2\\).",
    "casio_tip": "<b>Quy tắc bậc chuẩn:</b> \\(\\text{Bậc mẫu} - \\text{Bậc tử} > 1 \\Rightarrow (1+p) - 2 > 1 \\Leftrightarrow p > 2\\)."
  },
  {
    "id": "C4_07",
    "chapter": 4,
    "source": "Chương 4 - Câu 7",
    "question": "Bằng cách so sánh với chuỗi \\(\\sum_{n=1}^{+\\infty}\\frac{1}{n^\\alpha}\\), mệnh đề nào sau đây đúng?",
    "options": [
      "\\(\\sum_{n=1}^{+\\infty}\\frac{n+1}{n^2+3}\\) hội tụ.",
      "\\(\\sum_{n=1}^{+\\infty}\\frac{n+1}{n(\\sqrt{n^3}+2)}\\) hội tụ.",
      "\\(\\sum_{n=1}^{+\\infty}\\frac{2n+1}{5n^2+3}\\) hội tụ.",
      "\\(\\sum_{n=1}^{+\\infty}\\frac{7n+3}{n(\\sqrt{n^5}+1)}\\) phân kỳ."
    ],
    "correct": 1,
    "explanation": "Tính hiệu \\(\\alpha = \\text{Bậc mẫu} - \\text{Bậc tử}\\):<br>• A: \\(\\alpha = 2 - 1 = 1 \\le 1\\) (phân kỳ \\(\\Rightarrow\\) A sai).<br>• B: \\(\\alpha = \\left(1 + \\frac{3}{2}\\right) - 1 = \\frac{3}{2} > 1\\) (hội tụ \\(\\Rightarrow\\) B đúng).<br>• C: \\(\\alpha = 2 - 1 = 1 \\le 1\\) (phân kỳ \\(\\Rightarrow\\) C sai).<br>• D: \\(\\alpha = \\left(1 + \\frac{5}{2}\\right) - 1 = \\frac{5}{2} > 1\\) (hội tụ \\(\\Rightarrow\\) D sai).",
    "casio_tip": "<b>Quy tắc bậc chuẩn:</b> Chỉ cần nhẩm \\(\\alpha = \\text{Bậc mẫu} - \\text{Bậc tử}\\): ở câu B, \\(\\alpha = (1 + 1,5) - 1 = 1,5 > 1 \\Rightarrow\\) Hội tụ."
  },
  {
    "id": "C4_08",
    "chapter": 4,
    "source": "Chương 4 - Câu 8",
    "question": "Bằng cách so sánh với chuỗi \\(\\sum_{n=1}^{+\\infty}\\frac{1}{n^\\alpha}\\), mệnh đề nào sau đây đúng?",
    "options": [
      "\\(\\sum_{n=1}^{+\\infty}\\frac{n+1}{n^2+\\ln n}\\) hội tụ.",
      "\\(\\sum_{n=1}^{+\\infty}\\frac{n+1}{n(\\sqrt{n^3}+5)}\\) phân kỳ.",
      "\\(\\sum_{n=1}^{+\\infty}\\frac{2n+1}{5n^2+3}\\) hội tụ.",
      "\\(\\sum_{n=1}^{+\\infty}\\frac{2n+3}{n^5+\\ln(n+1)}\\) hội tụ."
    ],
    "correct": 3,
    "explanation": "Tính hiệu \\(\\alpha = \\text{Bậc mẫu} - \\text{Bậc tử}\\) (lưu ý \\(\\ln n\\) tăng chậm hơn mọi lũy thừa \\(n^\\varepsilon\\) nên bỏ qua khi cộng với \\(n^k\\)):<br>• A: \\(\\alpha = 2 - 1 = 1\\) (phân kỳ).<br>• B: \\(\\alpha = 2,5 - 1 = 1,5 > 1\\) (hội tụ).<br>• C: \\(\\alpha = 2 - 1 = 1\\) (phân kỳ).<br>• D: \\(\\alpha = 5 - 1 = 4 > 1\\) (hội tụ \\(\\Rightarrow\\) D đúng).",
    "casio_tip": "<b>Quy tắc bậc chuẩn:</b> Ở đáp án D, bỏ qua \\(\\ln(n+1)\\) so với \\(n^5\\), ta có \\(\\alpha = 5 - 1 = 4 > 1 \\Rightarrow\\) Hội tụ."
  },
  {
    "id": "C4_09",
    "chapter": 4,
    "source": "Chương 4 - Câu 9",
    "question": "Chuỗi \\(\\sum_{n=1}^{+\\infty}\\frac{n^2+2n}{(3n+1)n^{\\alpha-1}}\\) hội tụ khi và chỉ khi",
    "options": [
      "\\(\\alpha > 3\\).",
      "\\(\\alpha < 3\\).",
      "\\(\\alpha \\le 3\\).",
      "\\(\\alpha \\ge 3\\)."
    ],
    "correct": 0,
    "explanation": "Bậc tử là \\(2\\), bậc mẫu là \\(1 + (\\alpha - 1) = \\alpha\\).<br>Chuỗi hội tụ \\(\\Leftrightarrow \\text{Bậc mẫu} - \\text{Bậc tử} > 1 \\Leftrightarrow \\alpha - 2 > 1 \\Leftrightarrow \\alpha > 3\\).",
    "casio_tip": "<b>Quy tắc bậc chuẩn:</b> \\(\\text{Bậc mẫu} - \\text{Bậc tử} = \\alpha - 2 > 1 \\Leftrightarrow \\alpha > 3\\)."
  },
  {
    "id": "C4_10",
    "chapter": 4,
    "source": "Chương 4 - Câu 10",
    "question": "Chuỗi \\(\\sum_{n=1}^{+\\infty}\\frac{n^2+2n}{n^3+n^\\alpha+1}\\) hội tụ khi và chỉ khi",
    "options": [
      "\\(\\alpha > 1\\).",
      "\\(\\alpha < 3\\).",
      "\\(\\alpha \\ge 3\\).",
      "\\(\\alpha > 3\\)."
    ],
    "correct": 3,
    "explanation": "Bậc tử là \\(2\\), bậc mẫu là \\(\\max(3, \\alpha)\\).<br>Chuỗi hội tụ \\(\\Leftrightarrow \\max(3, \\alpha) - 2 > 1 \\Leftrightarrow \\max(3, \\alpha) > 3 \\Leftrightarrow \\alpha > 3\\).",
    "casio_tip": "<b>Quy tắc bậc chuẩn:</b> Tử bậc \\(2\\) nên mẫu cần bậc \\(> 3\\). Vì \\(n^3\\) mới chỉ bậc \\(3\\) nên cần \\(n^\\alpha\\) có \\(\\alpha > 3\\)."
  },
  {
    "id": "C4_11",
    "chapter": 4,
    "source": "Chương 4 - Câu 11",
    "question": "Chuỗi \\(\\sum_{n=1}^{+\\infty}\\frac{n^2+2n}{n^4+n^\\alpha+1}\\) hội tụ khi và chỉ khi",
    "options": [
      "\\(\\alpha > 1\\).",
      "\\(\\alpha < 3\\).",
      "\\(\\alpha \\in \\mathbb{R}\\).",
      "\\(\\alpha > 3\\)."
    ],
    "correct": 2,
    "explanation": "Bậc tử là \\(2\\), còn dưới mẫu đã có sẵn \\(n^4\\) nên bậc mẫu là \\(\\max(4, \\alpha) \\ge 4\\) với mọi \\(\\alpha \\in \\mathbb{R}\\).<br>Do đó \\(\\text{Bậc mẫu} - \\text{Bậc tử} \\ge 4 - 2 = 2 > 1\\) với mọi \\(\\alpha \\in \\mathbb{R}\\).",
    "casio_tip": "<b>Quy tắc bậc chuẩn:</b> Mẫu đã có sẵn \\(n^4\\) lớn hơn bậc tử \\(n^2\\) tới \\(2 > 1\\) đơn vị, nên luôn hội tụ với mọi \\(\\alpha \\in \\mathbb{R}\\)."
  },
  {
    "id": "C4_12",
    "chapter": 4,
    "source": "Chương 4 - Câu 12",
    "question": "Chuỗi \\(\\sum_{n=1}^{+\\infty}\\frac{n^2+n^\\alpha+2n}{n^4+1}\\) hội tụ khi và chỉ khi",
    "options": [
      "\\(\\alpha > 1\\).",
      "\\(\\alpha < 3\\).",
      "\\(\\alpha \\ge 3\\).",
      "\\(\\alpha > 3\\)."
    ],
    "correct": 1,
    "explanation": "Bậc mẫu là \\(4\\), bậc tử là \\(\\max(2, \\alpha)\\).<br>Chuỗi hội tụ \\(\\Leftrightarrow 4 - \\max(2, \\alpha) > 1 \\Leftrightarrow \\max(2, \\alpha) < 3 \\Leftrightarrow \\alpha < 3\\).",
    "casio_tip": "<b>Quy tắc bậc chuẩn:</b> Mẫu bậc \\(4\\) nên tử phải có bậc \\(< 4 - 1 = 3 \\Rightarrow \\alpha < 3\\)."
  },
  {
    "id": "C4_13",
    "chapter": 4,
    "source": "Chương 4 - Câu 13",
    "question": "Chuỗi \\(\\sum_{n=1}^{+\\infty}\\frac{n^2+n^\\alpha+2}{n^3+1}\\) phân kỳ khi và chỉ khi",
    "options": [
      "\\(\\alpha > 2\\).",
      "\\(\\alpha < 2\\).",
      "\\(\\alpha \\in \\mathbb{R}\\).",
      "Không tồn tại \\(\\alpha\\)."
    ],
    "correct": 2,
    "explanation": "Trên tử đã có sẵn \\(n^2\\) nên bậc tử \\(\\ge 2\\), còn bậc mẫu là \\(3\\).<br>Do đó \\(\\text{Bậc mẫu} - \\text{Bậc tử} \\le 3 - 2 = 1\\) với mọi \\(\\alpha \\in \\mathbb{R}\\), nên chuỗi luôn phân kỳ với mọi \\(\\alpha \\in \\mathbb{R}\\).",
    "casio_tip": "<b>Quy tắc bậc chuẩn:</b> Tử có sẵn \\(n^2\\), mẫu bậc \\(3 \\Rightarrow \\text{Bậc mẫu} - \\text{Bậc tử} \\le 1\\) nên luôn phân kỳ với mọi \\(\\alpha \\in \\mathbb{R}\\)."
  },
  {
    "id": "C4_14",
    "chapter": 4,
    "source": "Chương 4 - Câu 14",
    "question": "Chuỗi \\(\\sum_{n=1}^{+\\infty}\\left(\\frac{1}{n^{\\alpha-1}} + \\frac{1}{n^{3-\\beta}}\\right)\\) hội tụ khi và chỉ khi",
    "options": [
      "\\(\\alpha > 2\\) và \\(\\beta < 3\\).",
      "\\(\\alpha < 2\\) và \\(\\beta > 2\\).",
      "\\(\\alpha > 1\\) và \\(\\beta < 3\\).",
      "\\(\\alpha > 2\\) và \\(\\beta < 2\\)."
    ],
    "correct": 3,
    "explanation": "Tổng hai chuỗi dương hội tụ khi cả hai chuỗi thành phần cùng hội tụ:<br>\\(\\begin{cases} \\alpha - 1 > 1 \\\\ 3 - \\beta > 1 \\end{cases} \\Leftrightarrow \\begin{cases} \\alpha > 2 \\\\ \\beta < 2 \\end{cases}\\).",
    "casio_tip": "<b>Quy tắc bậc chuẩn:</b> Cho từng số mũ ở mẫu lớn hơn \\(1\\): \\(\\alpha - 1 > 1 \\Rightarrow \\alpha > 2\\) và \\(3 - \\beta > 1 \\Rightarrow \\beta < 2\\)."
  },
  {
    "id": "C4_15",
    "chapter": 4,
    "source": "Chương 4 - Câu 15",
    "question": "Chuỗi \\(\\sum_{n=1}^{+\\infty}\\left(\\frac{1}{n^{\\alpha-1}} + 3^n\\right)\\) phân kỳ khi và chỉ khi",
    "options": [
      "\\(\\alpha > 2\\).",
      "\\(\\alpha < 2\\).",
      "\\(\\alpha > 1\\).",
      "\\(\\alpha \\in \\mathbb{R}\\)."
    ],
    "correct": 3,
    "explanation": "Vì \\(\\frac{1}{n^{\\alpha-1}} > 0\\) và \\(3^n \\to +\\infty\\) khi \\(n \\to +\\infty\\) nên \\(\\lim_{n\\to\\infty} u_n = +\\infty \\ne 0\\) với mọi \\(\\alpha \\in \\mathbb{R}\\). Do đó chuỗi luôn phân kỳ với mọi \\(\\alpha \\in \\mathbb{R}\\).",
    "casio_tip": "<b>Điều kiện cần:</b> Số hạng chứa \\(3^n \\to +\\infty \\ne 0\\) nên chuỗi luôn phân kỳ với mọi \\(\\alpha \\in \\mathbb{R}\\)."
  },
  {
    "id": "C4_16",
    "chapter": 4,
    "source": "Chương 4 - Câu 16",
    "question": "Chuỗi \\(\\sum_{n=1}^{+\\infty}\\frac{3}{(q^2+1)^n}\\) hội tụ khi và chỉ khi",
    "options": [
      "\\(q > 1\\).",
      "\\(-1 < q < 1\\).",
      "\\(q \\ne 0\\).",
      "\\(0 < q < \\sqrt{2}\\)."
    ],
    "correct": 2,
    "explanation": "Đây là chuỗi cấp số nhân có công bội \\(r = \\frac{1}{q^2+1} > 0\\).<br>Chuỗi hội tụ \\(\\Leftrightarrow \\frac{1}{q^2+1} < 1 \\Leftrightarrow q^2 + 1 > 1 \\Leftrightarrow q^2 > 0 \\Leftrightarrow q \\ne 0\\).",
    "casio_tip": "<b>Quy tắc CSN:</b> Công bội \\(\\frac{1}{q^2+1} < 1\\) với mọi \\(q \\ne 0\\) (khi \\(q=0\\) thì công bội bằng \\(1\\) nên phân kỳ)."
  },
  {
    "id": "C4_17",
    "chapter": 4,
    "source": "Chương 4 - Câu 17",
    "question": "Chuỗi \\(\\sum_{n=1}^{+\\infty}\\frac{2^n + q^{2n}}{9^n}\\) hội tụ khi và chỉ khi",
    "options": [
      "\\(-3 < q < 3\\).",
      "\\(-2 < q < 2\\).",
      "\\(0 < q < 3\\).",
      "\\(q > 3\\)."
    ],
    "correct": 0,
    "explanation": "Tách thành \\(\\sum\\left(\\frac{2}{9}\\right)^n + \\sum\\left(\\frac{q^2}{9}\\right)^n\\).<br>Chuỗi đầu hội tụ vì \\(\\frac{2}{9} < 1\\). Chuỗi sau hội tụ \\(\\Leftrightarrow \\frac{q^2}{9} < 1 \\Leftrightarrow q^2 < 9 \\Leftrightarrow -3 < q < 3\\).",
    "casio_tip": "<b>Quy tắc CSN:</b> Công bội thứ hai là \\(\\frac{q^2}{9} < 1 \\Leftrightarrow q^2 < 9 \\Leftrightarrow -3 < q < 3\\)."
  },
  {
    "id": "C4_18",
    "chapter": 4,
    "source": "Chương 4 - Câu 18",
    "question": "Chuỗi \\(\\sum_{n=1}^{+\\infty}\\left[(p+1)^{2n} + q^{2n}\\right]\\) hội tụ khi và chỉ khi",
    "options": [
      "\\(-2 < p < 0\\) và \\(-1 < q < 1\\).",
      "\\(-2 < p < 1\\) và \\(0 < q < 1\\).",
      "\\(0 < p < 2\\) và \\(-1 < q < 1\\).",
      "\\(-2 < p < 0\\) và \\(-2 < q < 2\\)."
    ],
    "correct": 0,
    "explanation": "Tổng hai chuỗi không âm hội tụ khi cả hai chuỗi cấp số nhân cùng hội tụ:<br>\\(\\begin{cases} (p+1)^2 < 1 \\\\ q^2 < 1 \\end{cases} \\Leftrightarrow \\begin{cases} |p+1| < 1 \\\\ |q| < 1 \\end{cases} \\Leftrightarrow \\begin{cases} -2 < p < 0 \\\\ -1 < q < 1 \\end{cases}\\).",
    "casio_tip": "<b>Quy tắc CSN:</b> Giải \\(|p+1| < 1 \\Rightarrow -2 < p < 0\\) và \\(|q| < 1 \\Rightarrow -1 < q < 1\\)."
  },
  {
    "id": "C4_19",
    "chapter": 4,
    "source": "Chương 4 - Câu 19",
    "question": "Xét chuỗi đan dấu \\(S = \\sum_{n=1}^{+\\infty}\\frac{(-1)^n}{\\sqrt{n+3}}\\). Mệnh đề nào sau đây đúng?",
    "options": [
      "\\(S\\) bán hội tụ (hội tụ tương đối).",
      "\\(S\\) hội tụ tuyệt đối.",
      "\\(S\\) phân kỳ.",
      "\\(S\\) hội tụ tuyệt đối nhưng phân kỳ."
    ],
    "correct": 0,
    "explanation": "• Chuỗi đan dấu \\(S\\) thỏa mãn tiêu chuẩn Leibnitz (\\(\\frac{1}{\\sqrt{n+3}}\\) giảm dần về \\(0\\)) nên \\(S\\) hội tụ.<br>• Chuỗi trị tuyệt đối \\(\\sum\\frac{1}{\\sqrt{n+3}} \\sim \\sum\\frac{1}{n^{1/2}}\\) phân kỳ (\\(\\alpha = \\frac{1}{2} \\le 1\\)).<br>Vậy \\(S\\) bán hội tụ (hội tụ tương đối).",
    "casio_tip": "<b>Quy tắc Chuỗi đan dấu chuẩn:</b> Tính \\(\\alpha = \\text{Bậc mẫu} - \\text{Bậc tử} = \\frac{1}{2}\\). Vì \\(0 < \\alpha \\le 1\\) nên chuỗi <b>bán hội tụ</b> (nếu \\(\\alpha > 1\\) thì hội tụ tuyệt đối; nếu \\(\\alpha \\le 0\\) thì phân kỳ)."
  },
  {
    "id": "C4_20",
    "chapter": 4,
    "source": "Chương 4 - Câu 20",
    "question": "Xét chuỗi đan dấu \\(S = \\sum_{n=1}^{+\\infty}(-1)^n\\frac{n+1}{n(\\sqrt{n^3}+3)}\\). Mệnh đề nào sau đây đúng?",
    "options": [
      "\\(S\\) bán hội tụ (hội tụ tương đối).",
      "\\(S\\) hội tụ tuyệt đối.",
      "\\(S\\) phân kỳ.",
      "\\(S\\) hội tụ tuyệt đối nhưng phân kỳ."
    ],
    "correct": 1,
    "explanation": "Xét chuỗi trị tuyệt đối: \\(|u_n| = \\frac{n+1}{n(\\sqrt{n^3}+3)} \\sim \\frac{n}{n^{5/2}} = \\frac{1}{n^{3/2}}\\).<br>Vì \\(\\alpha = \\frac{3}{2} > 1\\) nên chuỗi trị tuyệt đối hội tụ \\(\\Rightarrow S\\) hội tụ tuyệt đối.",
    "casio_tip": "<b>Quy tắc Chuỗi đan dấu chuẩn:</b> Tính \\(\\alpha = \\text{Bậc mẫu} - \\text{Bậc tử} = (1 + 1,5) - 1 = 1,5 > 1 \\Rightarrow\\) <b>Hội tụ tuyệt đối</b>."
  },
  {
    "id": "C4_21",
    "chapter": 4,
    "source": "Chương 4 - Câu 21",
    "question": "Xét chuỗi đan dấu \\(S = \\sum_{n=1}^{+\\infty}(-1)^n\\arctan\\frac{n+1}{n+3}\\). Mệnh đề nào sau đây đúng?",
    "options": [
      "\\(S\\) bán hội tụ (hội tụ tương đối).",
      "\\(S\\) hội tụ tuyệt đối.",
      "\\(S\\) phân kỳ theo tiêu chuẩn Leibnitz.",
      "\\(S\\) phân kỳ theo điều kiện cần."
    ],
    "correct": 3,
    "explanation": "Khi \\(n \\to +\\infty\\), \\(\\arctan\\frac{n+1}{n+3} \\to \\arctan 1 = \\frac{\\pi}{4} \\ne 0\\). Do đó \\(\\lim_{n\\to\\infty} u_n\\) không bằng \\(0\\), chuỗi \\(S\\) phân kỳ theo điều kiện cần.",
    "casio_tip": "<b>Phương pháp CALC điều kiện cần:</b> Nhập \\(\\arctan\\left(\\frac{X+1}{X+3}\\right)\\), bấm <code>CALC</code> \\(X = 100 \\Rightarrow \\approx 0,775 \\ne 0 \\Rightarrow\\) Phân kỳ theo điều kiện cần."
  },
  {
    "id": "C4_22",
    "chapter": 4,
    "source": "Chương 4 - Câu 22",
    "question": "Chuỗi đan dấu \\(\\sum_{n=1}^{+\\infty}\\frac{(-1)^n}{n^{\\alpha-1}}\\) hội tụ khi và chỉ khi",
    "options": [
      "\\(\\alpha > 2\\).",
      "\\(\\alpha < 2\\).",
      "\\(\\alpha > 1\\).",
      "\\(\\alpha \\in \\mathbb{R}\\)."
    ],
    "correct": 2,
    "explanation": "Theo tiêu chuẩn Leibnitz (và điều kiện cần), chuỗi đan dấu \\(\\sum\\frac{(-1)^n}{n^p}\\) hội tụ khi và chỉ khi số mũ ở mẫu dương: \\(\\alpha - 1 > 0 \\Leftrightarrow \\alpha > 1\\).",
    "casio_tip": "<b>Quy tắc Chuỗi đan dấu chuẩn:</b> Chuỗi đan dấu chỉ cần \\(\\text{Bậc mẫu} > \\text{Bậc tử}\\) là hội tụ: \\(\\alpha - 1 > 0 \\Leftrightarrow \\alpha > 1\\)."
  },
  {
    "id": "C4_23",
    "chapter": 4,
    "source": "Chương 4 - Câu 23",
    "question": "Chuỗi đan dấu \\(\\sum_{n=1}^{+\\infty}(-1)^n\\frac{n^2+1}{n^\\alpha + n + 2}\\) hội tụ khi và chỉ khi",
    "options": [
      "\\(\\alpha > 2\\).",
      "\\(\\alpha < 2\\).",
      "\\(\\alpha > 1\\).",
      "\\(\\alpha \\in \\mathbb{R}\\)."
    ],
    "correct": 0,
    "explanation": "Để chuỗi đan dấu hội tụ thì \\(\\lim_{n\\to\\infty}|u_n| = 0\\) và dãy giảm về \\(0\\), tức là bậc mẫu phải lớn hơn bậc tử: \\(\\alpha > 2\\).",
    "casio_tip": "<b>Quy tắc Chuỗi đan dấu chuẩn:</b> Để \\(|u_n| \\to 0\\) thì \\(\\text{Bậc mẫu} > \\text{Bậc tử} \\Leftrightarrow \\alpha > 2\\)."
  },
  {
    "id": "C4_24",
    "chapter": 4,
    "source": "Chương 4 - Câu 24",
    "question": "Chuỗi đan dấu \\(\\sum_{n=1}^{+\\infty}(-1)^n\\frac{n^2+1}{n^3+A^2}\\) hội tụ khi và chỉ khi",
    "options": [
      "\\(A > 2\\).",
      "\\(A < 2\\).",
      "\\(A > 1\\).",
      "\\(A \\in \\mathbb{R}\\)."
    ],
    "correct": 3,
    "explanation": "Với mọi \\(A \\in \\mathbb{R}\\), bậc mẫu là \\(3\\) lớn hơn bậc tử là \\(2\\), dãy \\(\\frac{n^2+1}{n^3+A^2}\\) đơn điệu giảm về \\(0\\) khi \\(n\\) đủ lớn nên chuỗi luôn hội tụ theo tiêu chuẩn Leibnitz.",
    "casio_tip": "<b>Quy tắc Chuỗi đan dấu chuẩn:</b> \\(\\text{Bậc mẫu} = 3 > \\text{Bậc tử} = 2\\) với mọi hằng số \\(A \\in \\mathbb{R} \\Rightarrow\\) Chọn D."
  },
  {
    "id": "C4_25",
    "chapter": 4,
    "source": "Chương 4 - Câu 25",
    "question": "Cho chuỗi số \\(\\sum_{n=1}^{+\\infty}\\frac{(p^2+3)n^2+5}{2^n}\\) với \\(p\\) là tham số. Mệnh đề nào sau đây đúng?",
    "options": [
      "Chuỗi hội tụ với mọi \\(p\\).",
      "Chuỗi phân kỳ với mọi \\(|p| > 1\\).",
      "Nếu \\(|p| > \\sqrt{3}\\) thì chuỗi phân kỳ.",
      "Chuỗi hội tụ khi và chỉ khi \\(|p| < 2\\)."
    ],
    "correct": 0,
    "explanation": "Áp dụng tiêu chuẩn Cauchy (hoặc D'Alembert): \\(\\lim_{n\\to\\infty}\\sqrt[n]{u_n} = \\lim_{n\\to\\infty}\\frac{\\sqrt[n]{(p^2+3)n^2+5}}{2} = \\frac{1}{2} < 1\\) với mọi \\(p \\in \\mathbb{R}\\). Vậy chuỗi hội tụ với mọi \\(p\\).",
    "casio_tip": "<b>Quy tắc tốc độ tăng:</b> Dưới mẫu có hàm mũ \\(2^n\\) luôn thắng đa thức \\(n^2\\) trên tử với mọi hằng số \\(p \\Rightarrow\\) Hội tụ với mọi \\(p\\)."
  },
  {
    "id": "C4_26",
    "chapter": 4,
    "source": "Chương 4 - Câu 26",
    "question": "Chuỗi số \\(\\sum_{n=1}^{+\\infty}\\left(\\frac{pn^2+n+1}{2n^2+3}\\right)^n\\) với \\(p\\) là tham số hội tụ khi và chỉ khi",
    "options": [
      "\\(-2 \\le p < 2\\).",
      "\\(-2 < p \\le 2\\).",
      "\\(-2 < p < 2\\).",
      "\\(-2 \\le p \\le 2\\)."
    ],
    "correct": 2,
    "explanation": "Áp dụng tiêu chuẩn Cauchy: \\(\\lim_{n\\to\\infty}\\sqrt[n]{|u_n|} = \\lim_{n\\to\\infty}\\left|\\frac{pn^2+n+1}{2n^2+3}\\right| = \\frac{|p|}{2}\\).<br>• Khi \\(\\frac{|p|}{2} < 1 \\Leftrightarrow -2 < p < 2\\): chuỗi hội tụ.<br>• Khi \\(p = \\pm 2\\): \\(|u_n| = \\left(1 + \\frac{\\pm n - 2}{2n^2+3}\\right)^n \\to e^{\\pm 1/2} \\ne 0\\) nên chuỗi phân kỳ.<br>Vậy \\(-2 < p < 2\\).",
    "casio_tip": "<b>Tiêu chuẩn Cauchy chuẩn:</b> Bỏ mũ \\(n\\), lấy giới hạn \\(\\left|\\frac{p}{2}\\right| < 1 \\Leftrightarrow -2 < p < 2\\). Thử \\(p = \\pm 2\\) bằng <code>CALC</code> \\(X = 100\\) thấy \\(u_{100} \\ne 0 \\Rightarrow\\) Loại dấu bằng."
  },
  {
    "id": "C4_27",
    "chapter": 4,
    "source": "Chương 4 - Câu 27",
    "question": "Chuỗi số \\(\\sum_{n=1}^{+\\infty}\\left(\\frac{2n^2+n+1}{pn^2+3}\\right)^n\\) với \\(p\\) là tham số hội tụ khi và chỉ khi",
    "options": [
      "\\(p \\le -2\\) hoặc \\(p \\ge 2\\).",
      "\\(p < -2\\).",
      "\\(p > 2\\).",
      "\\(p < -2\\) hoặc \\(p > 2\\)."
    ],
    "correct": 3,
    "explanation": "Áp dụng tiêu chuẩn Cauchy: \\(\\lim_{n\\to\\infty}\\sqrt[n]{|u_n|} = \\frac{2}{|p|} < 1 \\Leftrightarrow |p| > 2 \\Leftrightarrow p < -2\\) hoặc \\(p > 2\\). (Tại \\(p = \\pm 2\\) chuỗi phân kỳ vì \\(\\lim |u_n| \\ne 0\\)).",
    "casio_tip": "<b>Tiêu chuẩn Cauchy chuẩn:</b> Bỏ mũ \\(n\\), lấy giới hạn \\(\\frac{2}{|p|} < 1 \\Leftrightarrow |p| > 2 \\Leftrightarrow p < -2\\) hoặc \\(p > 2\\)."
  },
  {
    "id": "C4_28",
    "chapter": 4,
    "source": "Chương 4 - Câu 28",
    "question": "Chuỗi số \\(\\sum_{n=1}^{+\\infty}\\left(\\frac{pn^2+n+1}{2n^3+3}\\right)^n\\) với \\(p\\) là tham số hội tụ khi và chỉ khi",
    "options": [
      "\\(-2 \\le p < 2\\).",
      "\\(-2 < p \\le 2\\).",
      "\\(-2 < p < 2\\).",
      "\\(p \\in \\mathbb{R}\\)."
    ],
    "correct": 3,
    "explanation": "Áp dụng tiêu chuẩn Cauchy: \\(\\lim_{n\\to\\infty}\\sqrt[n]{|u_n|} = \\lim_{n\\to\\infty}\\left|\\frac{pn^2+n+1}{2n^3+3}\\right| = 0 < 1\\) với mọi \\(p \\in \\mathbb{R}\\) (do bậc tử là 2 nhỏ hơn bậc mẫu là 3). Vậy chuỗi hội tụ với mọi \\(p \\in \\mathbb{R}\\).",
    "casio_tip": "<b>Tiêu chuẩn Cauchy chuẩn:</b> Trong ngoặc có bậc tử (\\(2\\)) < bậc mẫu (\\(3\\)) nên giới hạn căn bậc \\(n\\) luôn bằng \\(0 < 1\\) với mọi \\(p \\in \\mathbb{R}\\)."
  },
  {
    "id": "C4_29",
    "chapter": 4,
    "source": "Chương 4 - Câu 29",
    "question": "Cho hai chuỗi số \\(S_1 = \\sum_{n=1}^{+\\infty}(-1)^{n-1}, S_2 = \\sum_{n=1}^{+\\infty}\\frac{1}{n}\\left(\\frac{2}{5}\\right)^n\\). Chọn khẳng định đúng.",
    "options": [
      "\\(S_1, S_2\\) cùng hội tụ.",
      "\\(S_1\\) hội tụ, \\(S_2\\) phân kỳ.",
      "\\(S_1\\) phân kỳ, \\(S_2\\) hội tụ.",
      "\\(S_1, S_2\\) cùng phân kỳ."
    ],
    "correct": 2,
    "explanation": "• \\(S_1\\): \\(\\lim_{n\\to\\infty}(-1)^{n-1}\\) không tồn tại (\\(\\ne 0\\)) \\(\\Rightarrow S_1\\) phân kỳ.<br>• \\(S_2\\): Theo tiêu chuẩn Cauchy, \\(\\lim_{n\\to\\infty}\\sqrt[n]{u_n} = \\frac{2}{5} < 1 \\Rightarrow S_2\\) hội tụ.",
    "casio_tip": "<b>Phương pháp Chuẩn:</b> \\(S_1\\) vi phạm điều kiện cần (phân kỳ); \\(S_2\\) có cơ số \\(\\frac{2}{5} < 1\\) (hội tụ theo Cauchy)."
  },
  {
    "id": "C4_30",
    "chapter": 4,
    "source": "Chương 4 - Câu 30",
    "question": "Cho hai chuỗi số \\(S_1 = \\sum_{n=1}^{+\\infty}\\frac{2^n}{n}, S_2 = \\sum_{n=1}^{+\\infty}\\frac{1}{\\sqrt{n}}\\). Chọn khẳng định đúng.",
    "options": [
      "\\(S_1, S_2\\) cùng hội tụ.",
      "\\(S_1\\) hội tụ, \\(S_2\\) phân kỳ.",
      "\\(S_1\\) phân kỳ, \\(S_2\\) hội tụ.",
      "\\(S_1, S_2\\) cùng phân kỳ."
    ],
    "correct": 3,
    "explanation": "• \\(S_1\\): \\(\\lim_{n\\to\\infty}\\frac{2^n}{n} = +\\infty \\ne 0 \\Rightarrow S_1\\) phân kỳ.<br>• \\(S_2\\): Chuỗi Riemann với \\(\\alpha = \\frac{1}{2} \\le 1 \\Rightarrow S_2\\) phân kỳ.",
    "casio_tip": "<b>Phương pháp Chuẩn:</b> \\(S_1\\) có \\(2^n\\) ở tử tiến ra \\(+\\infty\\) (phân kỳ); \\(S_2\\) có bậc mẫu \\(\\alpha = \\frac{1}{2} \\le 1\\) (phân kỳ)."
  },
  {
    "id": "C4_31",
    "chapter": 4,
    "source": "Chương 4 - Câu 31",
    "question": "Cho hai chuỗi số \\(S_1 = \\sum_{n=1}^{+\\infty}\\frac{1}{(3n-1)^2}, S_2 = \\sum_{n=1}^{+\\infty}\\frac{\\sqrt[3]{n}}{(n+1)\\sqrt{n}}\\). Chọn khẳng định đúng.",
    "options": [
      "\\(S_1, S_2\\) cùng hội tụ.",
      "\\(S_1\\) hội tụ, \\(S_2\\) phân kỳ.",
      "\\(S_1\\) phân kỳ, \\(S_2\\) hội tụ.",
      "\\(S_1, S_2\\) cùng phân kỳ."
    ],
    "correct": 0,
    "explanation": "• \\(S_1\\): Bậc mẫu là \\(2 > 1 \\Rightarrow S_1\\) hội tụ.<br>• \\(S_2\\): \\(\\text{Bậc mẫu} - \\text{Bậc tử} = \\left(1 + \\frac{1}{2}\\right) - \\frac{1}{3} = \\frac{7}{6} > 1 \\Rightarrow S_2\\) hội tụ.",
    "casio_tip": "<b>Quy tắc bậc chuẩn:</b> \\(S_1\\) có \\(\\alpha = 2 > 1\\) (hội tụ); \\(S_2\\) có \\(\\alpha = 1,5 - \\frac{1}{3} = \\frac{7}{6} > 1\\) (hội tụ)."
  },
  {
    "id": "C4_32",
    "chapter": 4,
    "source": "Chương 4 - Câu 32",
    "question": "Cho hai chuỗi số \\(S_1 = \\sum_{n=1}^{+\\infty}\\left(\\frac{n}{3n-1}\\right)^n, S_2 = \\sum_{n=1}^{+\\infty}\\left(\\frac{n+1}{2n-1}\\right)^n\\). Chọn khẳng định đúng.",
    "options": [
      "\\(S_1, S_2\\) cùng hội tụ.",
      "\\(S_1\\) hội tụ, \\(S_2\\) phân kỳ.",
      "\\(S_1\\) phân kỳ, \\(S_2\\) hội tụ.",
      "\\(S_1, S_2\\) cùng phân kỳ."
    ],
    "correct": 0,
    "explanation": "Áp dụng tiêu chuẩn Cauchy:<br>• \\(S_1\\): \\(C_1 = \\lim_{n\\to\\infty}\\frac{n}{3n-1} = \\frac{1}{3} < 1 \\Rightarrow S_1\\) hội tụ.<br>• \\(S_2\\): \\(C_2 = \\lim_{n\\to\\infty}\\frac{n+1}{2n-1} = \\frac{1}{2} < 1 \\Rightarrow S_2\\) hội tụ.",
    "casio_tip": "<b>Tiêu chuẩn Cauchy chuẩn:</b> Bỏ mũ \\(n\\), giới hạn của \\(S_1\\) là \\(\\frac{1}{3} < 1\\) và của \\(S_2\\) là \\(\\frac{1}{2} < 1 \\Rightarrow\\) Cùng hội tụ."
  },
  {
    "id": "C4_33",
    "chapter": 4,
    "source": "Chương 4 - Câu 33",
    "question": "Cho hai chuỗi số \\(S_1 = \\sum_{n=1}^{+\\infty}\\frac{1}{n!}, S_2 = \\sum_{n=1}^{+\\infty}\\frac{1}{(n+1)^2-1}\\). Chọn khẳng định đúng.",
    "options": [
      "\\(S_1, S_2\\) cùng hội tụ.",
      "\\(S_1\\) hội tụ, \\(S_2\\) phân kỳ.",
      "\\(S_1\\) phân kỳ, \\(S_2\\) hội tụ.",
      "\\(S_1, S_2\\) cùng phân kỳ."
    ],
    "correct": 0,
    "explanation": "• \\(S_1\\): Theo tiêu chuẩn D'Alembert, \\(\\lim_{n\\to\\infty}\\frac{u_{n+1}}{u_n} = \\lim_{n\\to\\infty}\\frac{1}{n+1} = 0 < 1 \\Rightarrow S_1\\) hội tụ.<br>• \\(S_2\\): \\(u_n \\sim \\frac{1}{n^2}\\) (\\(\\alpha = 2 > 1\\)) \\(\\Rightarrow S_2\\) hội tụ.",
    "casio_tip": "<b>Quy tắc chuẩn:</b> \\(n!\\) ở mẫu tăng cực nhanh nên \\(S_1\\) hội tụ; \\(S_2\\) có mẫu bậc \\(2 > 1\\) nên hội tụ."
  },
  {
    "id": "C4_34",
    "chapter": 4,
    "source": "Chương 4 - Câu 34",
    "question": "Cho hai chuỗi số \\(S_1 = \\sum_{n=1}^{+\\infty}\\left(\\frac{4n}{3n+1}\\right)^n, S_2 = \\sum_{n=1}^{+\\infty}\\left(\\frac{2n+1}{3n+1}\\right)^{\\frac{n}{2}}\\). Chọn khẳng định đúng.",
    "options": [
      "\\(S_1, S_2\\) cùng hội tụ.",
      "\\(S_1\\) hội tụ, \\(S_2\\) phân kỳ.",
      "\\(S_1\\) phân kỳ, \\(S_2\\) hội tụ.",
      "\\(S_1, S_2\\) cùng phân kỳ."
    ],
    "correct": 2,
    "explanation": "Áp dụng tiêu chuẩn Cauchy:<br>• \\(S_1\\): \\(C_1 = \\frac{4}{3} > 1 \\Rightarrow S_1\\) phân kỳ.<br>• \\(S_2\\): \\(C_2 = \\sqrt{\\frac{2}{3}} < 1 \\Rightarrow S_2\\) hội tụ.",
    "casio_tip": "<b>Tiêu chuẩn Cauchy chuẩn:</b> Lấy căn bậc \\(n\\): \\(S_1\\) ra \\(\\frac{4}{3} > 1\\) (phân kỳ); \\(S_2\\) ra \\(\\sqrt{\\frac{2}{3}} \\approx 0,816 < 1\\) (hội tụ)."
  },
  {
    "id": "C4_35",
    "chapter": 4,
    "source": "Chương 4 - Câu 35",
    "question": "Cho hai chuỗi số \\(S_1 = \\sum_{n=1}^{+\\infty}\\frac{n^3}{e^n}, S_2 = \\sum_{n=1}^{+\\infty}\\frac{2^{n-1}}{n^n}\\). Chọn khẳng định đúng.",
    "options": [
      "\\(S_1, S_2\\) cùng hội tụ.",
      "\\(S_1\\) hội tụ, \\(S_2\\) phân kỳ.",
      "\\(S_1\\) phân kỳ, \\(S_2\\) hội tụ.",
      "\\(S_1, S_2\\) cùng phân kỳ."
    ],
    "correct": 0,
    "explanation": "Áp dụng tiêu chuẩn Cauchy:<br>• \\(S_1\\): \\(C_1 = \\frac{1}{e} < 1 \\Rightarrow S_1\\) hội tụ.<br>• \\(S_2\\): \\(C_2 = \\lim_{n\\to\\infty}\\frac{2^{1-1/n}}{n} = 0 < 1 \\Rightarrow S_2\\) hội tụ.",
    "casio_tip": "<b>Quy tắc tốc độ tăng:</b> Ở \\(S_1\\), hàm mũ \\(e^n\\) ở mẫu thắng đa thức \\(n^3\\); ở \\(S_2\\), lũy thừa \\(n^n\\) ở mẫu thắng hàm mũ \\(2^{n-1}\\) \\(\\Rightarrow\\) Cùng hội tụ."
  },
  {
    "id": "C4_36",
    "chapter": 4,
    "source": "Chương 4 - Câu 36",
    "question": "Cho hai chuỗi số \\(S_1 = \\sum_{n=1}^{+\\infty}\\frac{n!}{2^n+1}, S_2 = \\sum_{n=1}^{+\\infty}\\frac{2^{n-1}}{(n+1)!}\\). Chọn khẳng định đúng.",
    "options": [
      "\\(S_1, S_2\\) cùng hội tụ.",
      "\\(S_1\\) hội tụ, \\(S_2\\) phân kỳ.",
      "\\(S_1\\) phân kỳ, \\(S_2\\) hội tụ.",
      "\\(S_1, S_2\\) cùng phân kỳ."
    ],
    "correct": 2,
    "explanation": "Theo tiêu chuẩn D'Alembert (hoặc thứ tự tăng \\(2^n \\ll n!\\)):<br>• \\(S_1\\) có \\(n!\\) trên tử nên \\(\\lim u_n = +\\infty \\Rightarrow S_1\\) phân kỳ.<br>• \\(S_2\\) có \\((n+1)!\\) dưới mẫu nên \\(D = \\lim\\frac{2}{n+2} = 0 < 1 \\Rightarrow S_2\\) hội tụ.",
    "casio_tip": "<b>Quy tắc tốc độ tăng chuẩn:</b> Nhớ thứ tự \\(\\ln n \\ll n^\\alpha \\ll a^n \\ll n! \\ll n^n\\). Vì \\(n! \\gg 2^n\\) nên \\(n!\\) ở tử (\\(S_1\\)) thì phân kỳ, \\(n!\\) ở mẫu (\\(S_2\\)) thì hội tụ."
  },
  {
    "id": "C4_37",
    "chapter": 4,
    "source": "Chương 4 - Câu 37",
    "question": "Cho hai chuỗi số \\(S_1 = \\sum_{n=1}^{+\\infty}\\arcsin\\frac{1}{\\sqrt{n}}, S_2 = \\sum_{n=1}^{+\\infty}\\sin\\frac{1}{n^2}\\). Chọn khẳng định đúng.",
    "options": [
      "\\(S_1, S_2\\) cùng hội tụ.",
      "\\(S_1\\) hội tụ, \\(S_2\\) phân kỳ.",
      "\\(S_1\\) phân kỳ, \\(S_2\\) hội tụ.",
      "\\(S_1, S_2\\) cùng phân kỳ."
    ],
    "correct": 2,
    "explanation": "Khi \\(n \\to +\\infty\\):<br>• \\(S_1\\): \\(\\arcsin\\frac{1}{\\sqrt{n}} \\sim \\frac{1}{n^{1/2}}\\) (\\(\\alpha = \\frac{1}{2} \\le 1 \\Rightarrow S_1\\) phân kỳ).<br>• \\(S_2\\): \\(\\sin\\frac{1}{n^2} \\sim \\frac{1}{n^2}\\) (\\(\\alpha = 2 > 1 \\Rightarrow S_2\\) hội tụ).",
    "casio_tip": "<b>Quy tắc bậc chuẩn:</b> Bỏ \\(\\arcsin, \\sin\\) khi góc tiến về \\(0\\): \\(S_1 \\sim \\frac{1}{n^{1/2}}\\) (phân kỳ); \\(S_2 \\sim \\frac{1}{n^2}\\) (hội tụ)."
  },
  {
    "id": "C4_38",
    "chapter": 4,
    "source": "Chương 4 - Câu 38",
    "question": "Cho hai chuỗi số \\(S_1 = \\sum_{n=1}^{+\\infty}\\ln\\left(1+\\frac{1}{n}\\right), S_2 = \\sum_{n=1}^{+\\infty}\\ln\\frac{n^2+1}{n^2}\\). Chọn khẳng định đúng.",
    "options": [
      "\\(S_1, S_2\\) cùng hội tụ.",
      "\\(S_1\\) hội tụ, \\(S_2\\) phân kỳ.",
      "\\(S_1\\) phân kỳ, \\(S_2\\) hội tụ.",
      "\\(S_1, S_2\\) cùng phân kỳ."
    ],
    "correct": 2,
    "explanation": "Khi \\(n \\to +\\infty\\), dùng \\(\\ln(1+u_n) \\sim u_n\\):<br>• \\(S_1\\): \\(\\ln\\left(1+\\frac{1}{n}\\right) \\sim \\frac{1}{n}\\) (\\(\\alpha = 1 \\le 1 \\Rightarrow S_1\\) phân kỳ).<br>• \\(S_2\\): \\(\\ln\\left(1+\\frac{1}{n^2}\\right) \\sim \\frac{1}{n^2}\\) (\\(\\alpha = 2 > 1 \\Rightarrow S_2\\) hội tụ).",
    "casio_tip": "<b>Quy tắc bậc chuẩn:</b> Dùng \\(\\ln(1+u) \\sim u\\): \\(S_1 \\sim \\frac{1}{n}\\) (phân kỳ); \\(S_2 = \\ln\\left(1+\\frac{1}{n^2}\\right) \\sim \\frac{1}{n^2}\\) (hội tụ)."
  },
  {
    "id": "C4_39",
    "chapter": 4,
    "source": "Chương 4 - Câu 39",
    "question": "Cho hai chuỗi số \\(S_1 = \\sum_{n=2}^{+\\infty}\\frac{1}{\\ln n}, S_2 = \\sum_{n=2}^{+\\infty}\\frac{1}{n\\ln n}\\). Chọn khẳng định đúng.",
    "options": [
      "\\(S_1, S_2\\) cùng hội tụ.",
      "\\(S_1\\) hội tụ, \\(S_2\\) phân kỳ.",
      "\\(S_1\\) phân kỳ, \\(S_2\\) hội tụ.",
      "\\(S_1, S_2\\) cùng phân kỳ."
    ],
    "correct": 3,
    "explanation": "• \\(S_1\\): Vì \\(\\ln n < n\\) nên \\(\\frac{1}{\\ln n} > \\frac{1}{n} \\Rightarrow S_1\\) phân kỳ.<br>• \\(S_2\\): Chuỗi Bertrand \\(\\sum\\frac{1}{n(\\ln n)^p}\\) với \\(p = 1 \\le 1\\) (hoặc tính \\(\\int_2^{+\\infty}\\frac{dx}{x\\ln x} = +\\infty\\)) \\(\\Rightarrow S_2\\) phân kỳ.",
    "casio_tip": "<b>Quy tắc Bertrand chuẩn:</b> Chuỗi \\(\\sum\\frac{1}{n(\\ln n)^p}\\) chỉ hội tụ khi \\(p > 1\\). Ở \\(S_2\\) có \\(p = 1 \\le 1\\) nên phân kỳ; \\(S_1\\) mẫu còn nhỏ hơn nên càng phân kỳ."
  },
  {
    "id": "C4_40",
    "chapter": 4,
    "source": "Chương 4 - Câu 40",
    "question": "Cho hai chuỗi số \\(S_1 = \\sum_{n=2}^{+\\infty}\\frac{1}{n\\ln^2 n}, S_2 = \\sum_{n=10}^{+\\infty}\\frac{1}{n\\ln n\\cdot\\ln(\\ln n)}\\). Chọn khẳng định đúng.",
    "options": [
      "\\(S_1, S_2\\) cùng hội tụ.",
      "\\(S_1\\) hội tụ, \\(S_2\\) phân kỳ.",
      "\\(S_1\\) phân kỳ, \\(S_2\\) hội tụ.",
      "\\(S_1, S_2\\) cùng phân kỳ."
    ],
    "correct": 1,
    "explanation": "Theo tiêu chuẩn tích phân Cauchy:<br>• \\(S_1\\): \\(\\int_2^{+\\infty}\\frac{dx}{x\\ln^2 x} = \\left.-\\frac{1}{\\ln x}\\right|_2^{+\\infty} = \\frac{1}{\\ln 2}\\) (hữu hạn) \\(\\Rightarrow S_1\\) hội tụ.<br>• \\(S_2\\): \\(\\int_{10}^{+\\infty}\\frac{dx}{x\\ln x\\ln(\\ln x)} = \\left.\\ln(\\ln(\\ln x))\\right|_{10}^{+\\infty} = +\\infty \\Rightarrow S_2\\) phân kỳ.",
    "casio_tip": "<b>Quy tắc Bertrand chuẩn:</b> \\(S_1 = \\sum\\frac{1}{n(\\ln n)^2}\\) có mũ của \\(\\ln n\\) là \\(p = 2 > 1 \\Rightarrow\\) Hội tụ; \\(S_2\\) có mũ của \\(\\ln(\\ln n)\\) là \\(1 \\le 1 \\Rightarrow\\) Phân kỳ."
  },
  {
    "id": "C4_41",
    "chapter": 4,
    "source": "Chương 4 - Câu 41",
    "question": "Cho hai chuỗi số \\(S_1 = \\sum_{n=2}^{+\\infty}\\frac{1}{\\sqrt{n}\\ln n}, S_2 = \\sum_{n=2}^{+\\infty}\\frac{1}{n\\ln n + \\sqrt{\\ln^3 n}}\\). Chọn khẳng định đúng.",
    "options": [
      "\\(S_1, S_2\\) cùng hội tụ.",
      "\\(S_1\\) hội tụ, \\(S_2\\) phân kỳ.",
      "\\(S_1\\) phân kỳ, \\(S_2\\) hội tụ.",
      "\\(S_1, S_2\\) cùng phân kỳ."
    ],
    "correct": 3,
    "explanation": "• \\(S_1\\): Bậc của \\(n\\) ở mẫu là \\(\\frac{1}{2} < 1\\) nên \\(\\frac{1}{\\sqrt{n}\\ln n} > \\frac{1}{n} \\Rightarrow S_1\\) phân kỳ.<br>• \\(S_2\\): Khi \\(n \\to \\infty\\), \\(n\\ln n + \\sqrt{\\ln^3 n} \\sim n\\ln n\\), mà \\(\\sum\\frac{1}{n\\ln n}\\) phân kỳ \\(\\Rightarrow S_2\\) phân kỳ.",
    "casio_tip": "<b>Quy tắc Bertrand chuẩn:</b> \\(S_1\\) có bậc của \\(n\\) là \\(\\frac{1}{2} < 1\\) (phân kỳ); \\(S_2\\) giữ số hạng lớn nhất ở mẫu là \\(n\\ln n\\) có \\(p = 1 \\le 1\\) (phân kỳ)."
  },
  {
    "id": "C4_42",
    "chapter": 4,
    "source": "Chương 4 - Câu 42",
    "question": "Cho hai chuỗi số \\(S_1 = \\sum_{n=1}^{+\\infty}\\frac{2^n n!}{n^n}, S_2 = \\sum_{n=1}^{+\\infty}\\frac{3^n n!}{n^n}\\). Chọn khẳng định đúng.",
    "options": [
      "\\(S_1, S_2\\) cùng hội tụ.",
      "\\(S_1\\) hội tụ, \\(S_2\\) phân kỳ.",
      "\\(S_1\\) phân kỳ, \\(S_2\\) hội tụ.",
      "\\(S_1, S_2\\) cùng phân kỳ."
    ],
    "correct": 1,
    "explanation": "Xét chuỗi tổng quát \\(\\sum\\frac{a^n n!}{n^n}\\) theo tiêu chuẩn D'Alembert:<br>\\(D = \\lim_{n\\to\\infty}\\frac{u_{n+1}}{u_n} = \\lim_{n\\to\\infty}\\frac{a}{\\left(1+\\frac{1}{n}\\right)^n} = \\frac{a}{e}\\).<br>• Với \\(S_1\\) (\\(a = 2 < e \\approx 2,718\\)): \\(D = \\frac{2}{e} < 1 \\Rightarrow S_1\\) hội tụ.<br>• Với \\(S_2\\) (\\(a = 3 > e\\)): \\(D = \\frac{3}{e} > 1 \\Rightarrow S_2\\) phân kỳ.",
    "casio_tip": "<b>Mẹo nhớ nhanh dạng \\(\\frac{a^n n!}{n^n}\\):</b> Vì \\(n! \\sim \\left(\\frac{n}{e}\\right)^n\\) nên \\(\\frac{a^n n!}{n^n} \\sim \\left(\\frac{a}{e}\\right)^n\\). So sánh \\(a\\) với \\(e \\approx 2,718\\): \\(2 < e\\) (hội tụ), \\(3 > e\\) (phân kỳ)."
  },
  {
    "id": "C4_43",
    "chapter": 4,
    "source": "Chương 4 - Câu 43",
    "question": "Cho hai chuỗi số \\(S_1 = \\sum_{n=1}^{+\\infty}\\left(1 - \\cos\\frac{\\pi}{n}\\right), S_2 = \\sum_{n=1}^{+\\infty}\\frac{n!}{n^n}\\). Chọn khẳng định đúng.",
    "options": [
      "\\(S_1, S_2\\) cùng hội tụ.",
      "\\(S_1\\) hội tụ, \\(S_2\\) phân kỳ.",
      "\\(S_1\\) phân kỳ, \\(S_2\\) hội tụ.",
      "\\(S_1, S_2\\) cùng phân kỳ."
    ],
    "correct": 0,
    "explanation": "• \\(S_1\\): Khi \\(n \\to +\\infty\\), \\(1 - \\cos\\frac{\\pi}{n} \\sim \\frac{\\pi^2}{2n^2}\\) (\\(\\alpha = 2 > 1 \\Rightarrow S_1\\) hội tụ).<br>• \\(S_2\\): Theo D'Alembert, \\(D = \\frac{1}{e} < 1 \\Rightarrow S_2\\) hội tụ.",
    "casio_tip": "<b>Quy tắc chuẩn:</b> \\(1 - \\cos\\frac{\\pi}{n} \\sim \\frac{\\pi^2}{2n^2}\\) bậc \\(2 > 1\\) (hội tụ); còn \\(\\frac{n!}{n^n}\\) có \\(n^n \\gg n!\\) nên hội tụ."
  },
  {
    "id": "C4_44",
    "chapter": 4,
    "source": "Chương 4 - Câu 44",
    "question": "Cho hai chuỗi số \\(S_1 = \\sum_{n=1}^{+\\infty}\\frac{e^n n!}{n^n}, S_2 = \\sum_{n=1}^{+\\infty}\\left(\\frac{3n^2+n+2}{5n^2+2n+1}\\right)^n\\). Chọn khẳng định đúng.",
    "options": [
      "\\(S_1, S_2\\) cùng hội tụ.",
      "\\(S_1\\) hội tụ, \\(S_2\\) phân kỳ.",
      "\\(S_1\\) phân kỳ, \\(S_2\\) hội tụ.",
      "\\(S_1, S_2\\) cùng phân kỳ."
    ],
    "correct": 2,
    "explanation": "• \\(S_1\\): Ta có \\(\\frac{u_{n+1}}{u_n} = \\frac{e}{(1+1/n)^n} > 1\\) (vì \\((1+1/n)^n < e\\)), suy ra \\(u_n\\) là dãy tăng nên \\(\\lim_{n\\to\\infty} u_n \\ne 0 \\Rightarrow S_1\\) phân kỳ.<br>• \\(S_2\\): Theo tiêu chuẩn Cauchy, \\(C = \\frac{3}{5} < 1 \\Rightarrow S_2\\) hội tụ.",
    "casio_tip": "<b>Phương pháp CALC điều kiện cần:</b> Với \\(S_1\\), bấm <code>CALC</code> \\(\\frac{e^X \\cdot X!}{X^X}\\) tại \\(X = 50\\) ra \\(\\approx 17,7 \\ne 0 \\Rightarrow S_1\\) phân kỳ; \\(S_2\\) có Cauchy \\(\\frac{3}{5} < 1 \\Rightarrow\\) Hội tụ."
  },
  {
    "id": "C4_45",
    "chapter": 4,
    "source": "Chương 4 - Câu 45",
    "question": "Cho hai chuỗi số \\(S_1 = \\sum_{n=1}^{+\\infty}\\frac{(-1)^{n-1}}{2n-1}, S_2 = \\sum_{n=1}^{+\\infty}\\frac{(-1)^{n-1}}{n^2}\\). Chọn khẳng định đúng.",
    "options": [
      "\\(S_1, S_2\\) cùng hội tụ tuyệt đối.",
      "\\(S_1\\) bán hội tụ, \\(S_2\\) hội tụ tuyệt đối.",
      "\\(S_1\\) hội tụ tuyệt đối, \\(S_2\\) bán hội tụ.",
      "\\(S_1, S_2\\) cùng phân kỳ."
    ],
    "correct": 1,
    "explanation": "• \\(S_1\\): Chuỗi đan dấu có bậc mẫu \\(\\alpha = 1 \\in (0;1]\\) nên \\(S_1\\) bán hội tụ.<br>• \\(S_2\\): Chuỗi đan dấu có bậc mẫu \\(\\alpha = 2 > 1\\) nên \\(S_2\\) hội tụ tuyệt đối.",
    "casio_tip": "<b>Quy tắc Chuỗi đan dấu chuẩn:</b> \\(S_1\\) có \\(\\alpha = 1 \\in (0;1] \\Rightarrow\\) Bán hội tụ; \\(S_2\\) có \\(\\alpha = 2 > 1 \\Rightarrow\\) Hội tụ tuyệt đối."
  },
  {
    "id": "C4_46",
    "chapter": 4,
    "source": "Chương 4 - Câu 46",
    "question": "Cho hai chuỗi số \\(S_1 = \\sum_{n=1}^{+\\infty}(-1)^{n-1}\\frac{n}{6n-5}, S_2 = \\sum_{n=1}^{+\\infty}(-1)^{n-1}\\frac{2n+1}{n(n+1)}\\). Chọn khẳng định đúng.",
    "options": [
      "\\(S_1, S_2\\) cùng hội tụ tuyệt đối.",
      "\\(S_1\\) phân kỳ, \\(S_2\\) bán hội tụ.",
      "\\(S_1\\) hội tụ tuyệt đối, \\(S_2\\) bán hội tụ.",
      "\\(S_1, S_2\\) cùng phân kỳ."
    ],
    "correct": 1,
    "explanation": "• \\(S_1\\): \\(\\lim_{n\\to\\infty}\\frac{n}{6n-5} = \\frac{1}{6} \\ne 0 \\Rightarrow S_1\\) phân kỳ theo điều kiện cần.<br>• \\(S_2\\): \\(\\text{Bậc mẫu} - \\text{Bậc tử} = 2 - 1 = 1 \\in (0;1] \\Rightarrow S_2\\) bán hội tụ.",
    "casio_tip": "<b>Quy tắc Chuỗi đan dấu chuẩn:</b> \\(S_1\\) có \\(\\alpha = 1 - 1 = 0 \\le 0\\) (phân kỳ); \\(S_2\\) có \\(\\alpha = 2 - 1 = 1 \\in (0;1]\\) (bán hội tụ)."
  },
  {
    "id": "C4_47",
    "chapter": 4,
    "source": "Chương 4 - Câu 47",
    "question": "Cho hai chuỗi số \\(S_1 = \\sum_{n=1}^{+\\infty}(-1)^{n-1}\\frac{n}{2^n}, S_2 = \\sum_{n=1}^{+\\infty}(-1)^{n-1}\\frac{n+3}{n\\sqrt{n+1}-1}\\). Chọn khẳng định đúng.",
    "options": [
      "\\(S_1, S_2\\) cùng hội tụ tuyệt đối.",
      "\\(S_1\\) bán hội tụ, \\(S_2\\) hội tụ tuyệt đối.",
      "\\(S_1\\) hội tụ tuyệt đối, \\(S_2\\) bán hội tụ.",
      "\\(S_1, S_2\\) cùng phân kỳ."
    ],
    "correct": 2,
    "explanation": "• \\(S_1\\): Chuỗi trị tuyệt đối \\(\\sum\\frac{n}{2^n}\\) hội tụ theo tiêu chuẩn Cauchy (\\(C = \\frac{1}{2} < 1\\)) \\(\\Rightarrow S_1\\) hội tụ tuyệt đối.<br>• \\(S_2\\): \\(\\text{Bậc mẫu} - \\text{Bậc tử} = \\frac{3}{2} - 1 = \\frac{1}{2} \\in (0;1] \\Rightarrow S_2\\) bán hội tụ.",
    "casio_tip": "<b>Quy tắc Chuỗi đan dấu chuẩn:</b> \\(S_1\\) có \\(2^n\\) dưới mẫu nên hội tụ tuyệt đối; \\(S_2\\) có \\(\\alpha = 1,5 - 1 = 0,5 \\in (0;1] \\Rightarrow\\) Bán hội tụ."
  },
  {
    "id": "C4_48",
    "chapter": 4,
    "source": "Chương 4 - Câu 48",
    "question": "Cho hai chuỗi số \\(S_1 = \\sum_{n=1}^{+\\infty}(-1)^{n-1}\\frac{\\ln n}{n}, S_2 = \\sum_{n=1}^{+\\infty}(-1)^{n-1}\\tan\\frac{1}{n\\sqrt{n}}\\). Chọn khẳng định đúng.",
    "options": [
      "\\(S_1, S_2\\) cùng hội tụ tuyệt đối.",
      "\\(S_1\\) bán hội tụ, \\(S_2\\) hội tụ tuyệt đối.",
      "\\(S_1\\) hội tụ tuyệt đối, \\(S_2\\) bán hội tụ.",
      "\\(S_1, S_2\\) cùng phân kỳ."
    ],
    "correct": 1,
    "explanation": "• \\(S_1\\): Dãy \\(\\frac{\\ln n}{n}\\) giảm về \\(0\\) khi \\(n \\ge 3\\) nên \\(S_1\\) hội tụ theo Leibnitz; nhưng \\(\\sum\\frac{\\ln n}{n}\\) phân kỳ (vì \\(\\frac{\\ln n}{n} > \\frac{1}{n}\\)) \\(\\Rightarrow S_1\\) bán hội tụ.<br>• \\(S_2\\): \\(\\left|\\tan\\frac{1}{n\\sqrt{n}}\\right| \\sim \\frac{1}{n^{3/2}}\\) (\\(\\alpha = \\frac{3}{2} > 1\\)) \\(\\Rightarrow S_2\\) hội tụ tuyệt đối.",
    "casio_tip": "<b>Quy tắc Chuỗi đan dấu chuẩn:</b> \\(S_1\\) có bậc mẫu \\(\\approx 1\\) nên bán hội tụ; \\(S_2\\) có bậc mẫu \\(\\alpha = 1,5 > 1\\) nên hội tụ tuyệt đối."
  },
  {
    "id": "C4_49",
    "chapter": 4,
    "source": "Chương 4 - Câu 49",
    "question": "Tìm miền hội tụ của chuỗi lũy thừa \\(\\sum_{n=1}^{+\\infty}\\frac{n}{3^n+1}(x-1)^n\\). Chọn khẳng định đúng.",
    "options": [
      "\\([-1;3]\\).",
      "\\((-1;3]\\).",
      "\\((-2;4)\\).",
      "\\([-2;4]\\)."
    ],
    "correct": 2,
    "explanation": "• Tâm hội tụ \\(x_0 = 1\\). Hệ số \\(a_n = \\frac{n}{3^n+1} \\Rightarrow \\rho = \\lim_{n\\to\\infty}\\sqrt[n]{|a_n|} = \\frac{1}{3} \\Rightarrow R = 3\\).<br>• Khoảng hội tụ: \\((1-3; 1+3) = (-2; 4)\\).<br>• Tại \\(x = -2\\) và \\(x = 4\\): \\(|u_n| = \\frac{n\\cdot 3^n}{3^n+1} \\to +\\infty \\ne 0\\) (phân kỳ tại cả hai đầu mút). Vậy miền hội tụ là \\((-2; 4)\\).",
    "casio_tip": "<b>Phương pháp Chuỗi lũy thừa chuẩn:</b> Tâm \\(x_0 = 1\\), bán kính \\(R = 3 \\Rightarrow\\) Khoảng \\((-2; 4)\\). Thay \\(x = 4\\) vào số hạng tổng quát được \\(\\frac{n\\cdot 3^n}{3^n+1} \\to +\\infty \\ne 0 \\Rightarrow\\) Loại ngoặc vuông, chọn \\((-2; 4)\\)."
  },
  {
    "id": "C4_50",
    "chapter": 4,
    "source": "Chương 4 - Câu 50",
    "question": "Tìm miền hội tụ của chuỗi lũy thừa \\(\\sum_{n=1}^{+\\infty}\\frac{n!}{3^n+1}(x-2)^n\\). Chọn khẳng định đúng.",
    "options": [
      "\\([-1;5]\\).",
      "\\((-1;5]\\).",
      "\\((-1;5)\\).",
      "\\(\\{2\\}\\)."
    ],
    "correct": 3,
    "explanation": "Ta có \\(\\rho = \\lim_{n\\to\\infty}\\left|\\frac{a_{n+1}}{a_n}\\right| = \\lim_{n\\to\\infty}(n+1)\\frac{3^n+1}{3^{n+1}+1} = +\\infty \\Rightarrow\\) Bán kính hội tụ \\(R = 0\\).<br>Vậy chuỗi chỉ hội tụ tại tâm \\(x = 2\\), tức miền hội tụ là \\(\\{2\\}\\).",
    "casio_tip": "<b>Mẹo nhận diện nhanh:</b> Hệ số \\(a_n\\) có \\(n!\\) ở trên tử (\\(\\gg 3^n\\)) nên \\(R = 0 \\Rightarrow\\) Chuỗi chỉ hội tụ tại điểm làm \\((x-2)^n = 0\\), tức là \\(\\{2\\}\\)."
  },
  {
    "id": "C4_51",
    "chapter": 4,
    "source": "Chương 4 - Câu 51",
    "question": "Tìm miền hội tụ của chuỗi lũy thừa \\(\\sum_{n=1}^{+\\infty}\\frac{3^n+2}{n!}(x-3)^n\\). Chọn khẳng định đúng.",
    "options": [
      "\\([0;6]\\).",
      "\\((-0;6]\\).",
      "\\((0;6)\\).",
      "\\(\\mathbb{R}\\)."
    ],
    "correct": 3,
    "explanation": "Ta có \\(\\rho = \\lim_{n\\to\\infty}\\left|\\frac{a_{n+1}}{a_n}\\right| = \\lim_{n\\to\\infty}\\frac{3^{n+1}+2}{(n+1)(3^n+2)} = 0 \\Rightarrow\\) Bán kính hội tụ \\(R = +\\infty\\).<br>Vậy miền hội tụ là \\(\\mathbb{R}\\).",
    "casio_tip": "<b>Mẹo nhận diện nhanh:</b> Hệ số \\(a_n\\) có \\(n!\\) ở dưới mẫu (\\(\\gg 3^n\\)) nên \\(R = +\\infty \\Rightarrow\\) Miền hội tụ là toàn bộ \\(\\mathbb{R}\\)."
  },
  {
    "id": "C4_52",
    "chapter": 4,
    "source": "Chương 4 - Câu 52",
    "question": "Tìm miền hội tụ của chuỗi lũy thừa \\(\\sum_{n=1}^{+\\infty}\\frac{(-1)^n}{n}(x-1)^n\\). Chọn khẳng định đúng.",
    "options": [
      "\\([-1;3]\\).",
      "\\((0;2]\\).",
      "\\((0;2)\\).",
      "\\([-1;3)\\)."
    ],
    "correct": 1,
    "explanation": "• Tâm \\(x_0 = 1\\), bán kính \\(R = 1 \\Rightarrow\\) Khoảng hội tụ \\((0; 2)\\).<br>• Tại \\(x = 0\\): \\(\\sum\\frac{(-1)^n(-1)^n}{n} = \\sum\\frac{1}{n}\\) (phân kỳ).<br>• Tại \\(x = 2\\): \\(\\sum\\frac{(-1)^n}{n}\\) (hội tụ theo tiêu chuẩn Leibnitz).<br>Vậy miền hội tụ là \\((0; 2]\\).",
    "casio_tip": "<b>Phương pháp Chuỗi lũy thừa chuẩn:</b> Tâm \\(1, R = 1 \\Rightarrow (0; 2)\\). Thay \\(x = 0\\) vào mất \\((-1)^n\\) còn \\(\\sum\\frac{1}{n}\\) (phân kỳ \\(\\rightarrow\\) ngoặc tròn); thay \\(x = 2\\) còn \\(\\sum\\frac{(-1)^n}{n}\\) (đan dấu hội tụ \\(\\rightarrow\\) ngoặc vuông)."
  },
  {
    "id": "C4_53",
    "chapter": 4,
    "source": "Chương 4 - Câu 53",
    "question": "Tìm miền hội tụ của chuỗi lũy thừa \\(\\sum_{n=1}^{+\\infty}\\frac{(-1)^n}{n^2+1}(x-1)^n\\). Chọn khẳng định đúng.",
    "options": [
      "\\([-1;3]\\).",
      "\\((-1;3]\\).",
      "\\((0;2)\\).",
      "\\([0;2]\\)."
    ],
    "correct": 3,
    "explanation": "• Tâm \\(x_0 = 1\\), bán kính \\(R = 1 \\Rightarrow\\) Khoảng hội tụ \\((0; 2)\\).<br>• Tại cả \\(x = 0\\) và \\(x = 2\\): \\(|u_n| = \\frac{1}{n^2+1} \\sim \\frac{1}{n^2}\\) (\\(\\alpha = 2 > 1\\)) nên chuỗi hội tụ tuyệt đối tại cả 2 đầu mút.<br>Vậy miền hội tụ là \\([0; 2]\\).",
    "casio_tip": "<b>Phương pháp Chuỗi lũy thừa chuẩn:</b> Khoảng \\((0; 2)\\). Vì mẫu có \\(n^2+1\\) bậc \\(2 > 1\\) nên tại cả hai đầu mút đều hội tụ tuyệt đối \\(\\Rightarrow\\) Chọn \\([0; 2]\\)."
  },
  {
    "id": "C4_54",
    "chapter": 4,
    "source": "Chương 4 - Câu 54",
    "question": "Tìm miền hội tụ của chuỗi lũy thừa \\(\\sum_{n=1}^{+\\infty}\\frac{(-1)^{n-1}}{n 2^n}(x-5)^n\\). Chọn khẳng định đúng.",
    "options": [
      "\\([2;8]\\).",
      "\\((3;7]\\).",
      "\\((2;8)\\).",
      "\\([3;7]\\)."
    ],
    "correct": 1,
    "explanation": "• Tâm \\(x_0 = 5\\), bán kính \\(R = 2 \\Rightarrow\\) Khoảng hội tụ \\((5-2; 5+2) = (3; 7)\\).<br>• Tại \\(x = 3\\): \\(\\sum\\frac{(-1)^{n-1}(-2)^n}{n 2^n} = -\\sum\\frac{1}{n}\\) (phân kỳ).<br>• Tại \\(x = 7\\): \\(\\sum\\frac{(-1)^{n-1}2^n}{n 2^n} = \\sum\\frac{(-1)^{n-1}}{n}\\) (hội tụ theo Leibnitz).<br>Vậy miền hội tụ là \\((3; 7]\\).",
    "casio_tip": "<b>Phương pháp Chuỗi lũy thừa chuẩn:</b> Dưới mẫu có \\(2^n \\Rightarrow R = 2\\), khoảng \\((3; 7)\\). Thay \\(x = 3\\) triệt tiêu đan dấu (phân kỳ); thay \\(x = 7\\) giữ nguyên đan dấu bậc \\(1\\) (hội tụ) \\(\\Rightarrow (3; 7]\\)."
  },
  {
    "id": "C4_55",
    "chapter": 4,
    "source": "Chương 4 - Câu 55",
    "question": "Tìm miền hội tụ của chuỗi lũy thừa \\(\\sum_{n=2}^{+\\infty}\\frac{1}{n\\ln n}(x-5)^n\\). Chọn khẳng định đúng.",
    "options": [
      "\\([2;8]\\).",
      "\\((4;6]\\).",
      "\\((2;8)\\).",
      "\\([4;6)\\)."
    ],
    "correct": 3,
    "explanation": "• Tâm \\(x_0 = 5\\), bán kính \\(R = 1 \\Rightarrow\\) Khoảng hội tụ \\((4; 6)\\).<br>• Tại \\(x = 4\\): \\(\\sum\\frac{(-1)^n}{n\\ln n}\\) (chuỗi đan dấu hội tụ theo tiêu chuẩn Leibnitz).<br>• Tại \\(x = 6\\): \\(\\sum\\frac{1}{n\\ln n}\\) (chuỗi dương Bertrand với \\(p = 1 \\le 1\\) nên phân kỳ).<br>Vậy miền hội tụ là \\([4; 6)\\).",
    "casio_tip": "<b>Phương pháp Chuỗi lũy thừa chuẩn:</b> Khoảng \\((4; 6)\\). Tại \\(x = 4\\) có \\((-1)^n\\) đan dấu nên hội tụ; tại \\(x = 6\\) là chuỗi dương \\(\\sum\\frac{1}{n\\ln n}\\) phân kỳ \\(\\Rightarrow [4; 6)\\)."
  },
  {
    "id": "C4_56",
    "chapter": 4,
    "source": "Chương 4 - Câu 56",
    "question": "Tìm miền hội tụ của chuỗi lũy thừa \\(\\sum_{n=1}^{+\\infty}\\left(\\frac{n+1}{3n}\\right)^n (x-5)^n\\). Chọn khẳng định đúng.",
    "options": [
      "\\([3;7]\\).",
      "\\((3;7]\\).",
      "\\((2;8)\\).",
      "\\([2;8]\\)."
    ],
    "correct": 2,
    "explanation": "• Tâm \\(x_0 = 5\\), \\(\\rho = \\lim_{n\\to\\infty}\\frac{n+1}{3n} = \\frac{1}{3} \\Rightarrow R = 3 \\Rightarrow\\) Khoảng hội tụ \\((5-3; 5+3) = (2; 8)\\).<br>• Tại \\(x = 2\\) và \\(x = 8\\): \\(|u_n| = \\left(\\frac{n+1}{n}\\right)^n = \\left(1+\\frac{1}{n}\\right)^n \\to e \\ne 0\\) (phân kỳ tại cả hai đầu mút).<br>Vậy miền hội tụ là \\((2; 8)\\).",
    "casio_tip": "<b>Phương pháp Chuỗi lũy thừa chuẩn:</b> \\(R = 3 \\Rightarrow\\) Khoảng \\((2; 8)\\). Tại hai biên \\(|x-5|=3\\) thì \\(|u_n| = \\left(1+\\frac{1}{n}\\right)^n \\to e \\ne 0 \\Rightarrow\\) Loại cả 2 đầu mút, chọn \\((2; 8)\\)."
  },
  {
    "id": "C4_57",
    "chapter": 4,
    "source": "Chương 4 - Câu 57",
    "question": "Cho chuỗi lũy thừa \\(S = \\sum_{n=1}^{+\\infty}(-1)^n(n+2)^2 x^n\\) với hai mệnh đề:<br>(a) \\(S\\) hội tụ tuyệt đối khi \\(-1 < x < 1\\)<br>(b) \\(S\\) phân kỳ khi \\(|x| \\ge 1\\)<br>Khẳng định nào sau đây đúng?",
    "options": [
      "(a), (b) đều đúng.",
      "(a) đúng, (b) sai.",
      "(a) sai, (b) đúng.",
      "(a), (b) đều sai."
    ],
    "correct": 0,
    "explanation": "Bán kính hội tụ \\(R = \\lim_{n\\to\\infty}\\left|\\frac{a_n}{a_{n+1}}\\right| = 1\\).<br>• Trong khoảng \\((-1; 1)\\), chuỗi lũy thừa luôn hội tụ tuyệt đối \\(\\Rightarrow\\) (a) đúng.<br>• Khi \\(|x| \\ge 1\\), \\(|u_n| = (n+2)^2|x|^n \\ge (n+2)^2 \\to +\\infty \\ne 0\\) nên \\(S\\) phân kỳ \\(\\Rightarrow\\) (b) đúng.",
    "casio_tip": "<b>Kiến thức cốt lõi:</b> Mọi chuỗi lũy thừa đều hội tụ tuyệt đối bên trong khoảng hội tụ \\((-R; R)\\). Tại \\(|x| \\ge 1\\), hệ số \\((n+2)^2 \\to +\\infty\\) nên phân kỳ \\(\\Rightarrow\\) Cả (a), (b) đều đúng."
  },
  {
    "id": "C4_58",
    "chapter": 4,
    "source": "Chương 4 - Câu 58",
    "question": "Cho chuỗi lũy thừa \\(S = \\sum_{n=1}^{+\\infty}\\frac{x^n}{n}\\) với hai mệnh đề:<br>(a) \\(S\\) hội tụ tuyệt đối khi \\(-1 < x < 1\\)<br>(b) \\(S\\) bán hội tụ khi \\(x = -1\\)<br>Khẳng định nào sau đây đúng?",
    "options": [
      "(a), (b) đều đúng.",
      "(a) đúng, (b) sai.",
      "(a) sai, (b) đúng.",
      "(a), (b) đều sai."
    ],
    "correct": 0,
    "explanation": "• Bán kính hội tụ \\(R = 1\\), nên \\(S\\) hội tụ tuyệt đối khi \\(-1 < x < 1\\) \\(\\Rightarrow\\) (a) đúng.<br>• Khi \\(x = -1\\), \\(S = \\sum_{n=1}^{+\\infty}\\frac{(-1)^n}{n}\\) là chuỗi đan dấu bán hội tụ \\(\\Rightarrow\\) (b) đúng.",
    "casio_tip": "<b>Quy tắc chuẩn:</b> Trong khoảng \\((-1;1)\\) hội tụ tuyệt đối; tại \\(x = -1\\) là chuỗi điều hòa đan dấu \\(\\sum\\frac{(-1)^n}{n}\\) bán hội tụ \\(\\Rightarrow\\) (a), (b) đều đúng."
  },
  {
    "id": "C4_59",
    "chapter": 4,
    "source": "Chương 4 - Câu 59",
    "question": "Cho chuỗi lũy thừa \\(S = \\sum_{n=1}^{+\\infty}\\frac{x^n}{n}\\) với hai mệnh đề:<br>(a) \\(S\\) hội tụ tuyệt đối khi \\(-1 < x < 1\\)<br>(b) \\(S\\) bán hội tụ khi \\(x = 1\\)<br>Khẳng định nào sau đây đúng?",
    "options": [
      "(a), (b) đều đúng.",
      "(a) đúng, (b) sai.",
      "(a) sai, (b) đúng.",
      "(a), (b) đều sai."
    ],
    "correct": 1,
    "explanation": "• (a) đúng vì \\(R = 1\\).<br>• Khi \\(x = 1\\), \\(S = \\sum_{n=1}^{+\\infty}\\frac{1}{n}\\) là chuỗi điều hòa <b>phân kỳ</b> chứ không phải bán hội tụ \\(\\Rightarrow\\) (b) sai.",
    "casio_tip": "<b>Quy tắc chuẩn:</b> Tại \\(x = 1\\) chuỗi là \\(\\sum\\frac{1}{n}\\) phân kỳ \\(\\Rightarrow\\) (b) sai, chọn B."
  },
  {
    "id": "C4_60",
    "chapter": 4,
    "source": "Chương 4 - Câu 60",
    "question": "Cho chuỗi lũy thừa \\(S = \\sum_{n=1}^{+\\infty}\\frac{x^n}{n^2}\\) với hai mệnh đề:<br>(a) \\(S\\) hội tụ tuyệt đối khi \\(-1 \\le x \\le 1\\)<br>(b) \\(S\\) phân kỳ khi và chỉ khi \\(x < -1\\)<br>Chọn khẳng định đúng nhất.",
    "options": [
      "(a), (b) đều đúng.",
      "(a) đúng, (b) sai.",
      "(a) sai, (b) đúng.",
      "(a), (b) đều sai."
    ],
    "correct": 1,
    "explanation": "• Với \\(-1 \\le x \\le 1\\): \\(\\left|\\frac{x^n}{n^2}\\right| \\le \\frac{1}{n^2}\\) mà \\(\\sum\\frac{1}{n^2}\\) hội tụ nên \\(S\\) hội tụ tuyệt đối trên \\([-1; 1]\\) \\(\\Rightarrow\\) (a) đúng.<br>• \\(S\\) phân kỳ khi và chỉ khi \\(|x| > 1\\) (tức \\(x < -1\\) hoặc \\(x > 1\\)), nên (b) thiếu trường hợp \\(x > 1\\) \\(\\Rightarrow\\) (b) sai.",
    "casio_tip": "<b>Quy tắc chuẩn:</b> Miền hội tụ tuyệt đối là \\([-1; 1]\\), nên phân kỳ khi và chỉ khi \\(x \\notin [-1; 1]\\) (cả \\(x < -1\\) lẫn \\(x > 1\\)) \\(\\Rightarrow\\) (a) đúng, (b) sai."
  },
  {
    "id": "C4_61",
    "chapter": 4,
    "source": "Chương 4 - Câu 61",
    "question": "Cho chuỗi lũy thừa \\(S = \\sum_{n=1}^{+\\infty}\\frac{x^n}{n^2}\\) với hai mệnh đề:<br>(a) \\(S\\) hội tụ tuyệt đối khi \\(-1 \\le x \\le 1\\)<br>(b) \\(S\\) phân kỳ khi và chỉ khi \\(x > 1\\)<br>Chọn khẳng định đúng nhất.",
    "options": [
      "(a), (b) đều đúng.",
      "(a) đúng, (b) sai.",
      "(a) sai, (b) đúng.",
      "(a), (b) đều sai."
    ],
    "correct": 1,
    "explanation": "• (a) đúng vì trên \\([-1; 1]\\) chuỗi hội tụ tuyệt đối.<br>• (b) sai vì chuỗi phân kỳ khi và chỉ khi \\(x > 1\\) hoặc \\(x < -1\\).",
    "casio_tip": "<b>Quy tắc chuẩn:</b> Tương tự câu 60, phân kỳ tại cả \\(x > 1\\) và \\(x < -1\\) nên nói \\\"khi và chỉ khi \\(x > 1\\)\\\" là sai \\(\\Rightarrow\\) Chọn B."
  }
];

window.PRESET_EXAMS = [
  {
    "id": "de_1",
    "number": 1,
    "title": "Đề thi số 1",
    "course_code": "BS0.101.3-1-1-26(N60)",
    "duration_minutes": 50,
    "question_ids": [
      "C2_23",
      "C2_20",
      "C1_15",
      "C1_26",
      "C3_40",
      "C1_14",
      "C1_13",
      "C3_36",
      "C2_TL06",
      "C1_19",
      "C4_55",
      "C3_26",
      "C4_15",
      "C4_52",
      "C3_32",
      "C2_TL01",
      "C4_61",
      "C4_06",
      "C3_23",
      "C4_17",
      "C2_TL04",
      "C3_46",
      "C1_31",
      "C3_01",
      "C3_47",
      "C1_32",
      "C2_16",
      "C4_46",
      "C2_TL08",
      "C4_18",
      "C3_49",
      "C4_07",
      "C1_36",
      "C2_10",
      "C4_38",
      "C4_42",
      "C3_02",
      "C2_TL05",
      "C1_24",
      "C1_17"
    ]
  },
  {
    "id": "de_2",
    "number": 2,
    "title": "Đề thi số 2",
    "course_code": "BS0.101.3-1-1-26(N60)",
    "duration_minutes": 50,
    "question_ids": [
      "C2_24",
      "C3_31",
      "C4_35",
      "C4_26",
      "C3_48",
      "C1_34",
      "C2_08",
      "C4_34",
      "C3_10",
      "C3_21",
      "C1_07",
      "C3_25",
      "C4_57",
      "C2_25",
      "C2_TL10",
      "C2_TL07",
      "C2_06",
      "C2_12",
      "C1_38",
      "C1_20",
      "C3_20",
      "C4_60",
      "C1_33",
      "C1_22",
      "C3_12",
      "C4_23",
      "C4_27",
      "C2_14",
      "C4_30",
      "C1_01",
      "C4_11",
      "C2_05",
      "C1_37",
      "C4_41",
      "C4_50",
      "C3_05",
      "C1_35",
      "C3_27",
      "C1_28",
      "C3_17"
    ]
  },
  {
    "id": "de_3",
    "number": 3,
    "title": "Đề thi số 3",
    "course_code": "BS0.101.3-1-1-26(N60)",
    "duration_minutes": 50,
    "question_ids": [
      "C3_35",
      "C4_13",
      "C4_01",
      "C3_16",
      "C1_25",
      "C1_04",
      "C1_09",
      "C2_21",
      "C1_10",
      "C1_16",
      "C4_45",
      "C3_34",
      "C4_24",
      "C4_36",
      "C1_12",
      "C2_18",
      "C3_11",
      "C2_TL03",
      "C2_26",
      "C4_47",
      "C1_27",
      "C4_19",
      "C4_43",
      "C3_28",
      "C3_15",
      "C1_05",
      "C3_07",
      "C4_53",
      "C2_09",
      "C2_TL02",
      "C4_21",
      "C2_02",
      "C4_40",
      "C2_TL11",
      "C1_03",
      "C3_08",
      "C3_24",
      "C1_02",
      "C3_19",
      "C2_11"
    ]
  },
  {
    "id": "de_4",
    "number": 4,
    "title": "Đề thi số 4",
    "course_code": "BS0.101.3-1-1-26(N60)",
    "duration_minutes": 50,
    "question_ids": [
      "C4_05",
      "C2_TL09",
      "C4_09",
      "C2_15",
      "C3_14",
      "C3_39",
      "C3_13",
      "C4_12",
      "C1_18",
      "C4_14",
      "C1_24",
      "C3_37",
      "C1_30",
      "C1_23",
      "C2_22",
      "C1_06",
      "C3_04",
      "C1_02",
      "C1_29",
      "C1_11",
      "C4_33",
      "C2_17",
      "C4_08",
      "C4_16",
      "C2_13",
      "C4_32",
      "C4_02",
      "C3_41",
      "C2_07",
      "C3_09",
      "C3_42",
      "C2_19",
      "C3_06",
      "C1_21",
      "C1_08",
      "C2_03",
      "C4_04",
      "C2_04",
      "C4_48",
      "C3_38"
    ]
  },
  {
    "id": "de_5",
    "number": 5,
    "title": "Đề thi số 5",
    "course_code": "BS0.101.3-1-1-26(N60)",
    "duration_minutes": 50,
    "question_ids": [
      "C4_37",
      "C3_43",
      "C4_31",
      "C4_56",
      "C1_36",
      "C1_13",
      "C1_34",
      "C2_TL07",
      "C1_30",
      "C3_29",
      "C4_20",
      "C3_22",
      "C1_06",
      "C2_03",
      "C3_50",
      "C3_30",
      "C3_18",
      "C4_22",
      "C1_37",
      "C4_58",
      "C1_29",
      "C2_04",
      "C3_44",
      "C1_17",
      "C1_20",
      "C4_10",
      "C4_44",
      "C2_08",
      "C3_45",
      "C4_28",
      "C4_25",
      "C2_TL09",
      "C2_19",
      "C2_10",
      "C1_19",
      "C2_09",
      "C3_33",
      "C4_49",
      "C3_03",
      "C2_25"
    ]
  },
  {
    "id": "de_6",
    "number": 6,
    "title": "Đề thi số 6",
    "course_code": "BS0.101.3-1-1-26(N60)",
    "duration_minutes": 50,
    "question_ids": [
      "C4_56",
      "C2_TL08",
      "C1_25",
      "C1_32",
      "C4_55",
      "C1_29",
      "C3_11",
      "C3_24",
      "C3_38",
      "C2_11",
      "C4_51",
      "C2_TL03",
      "C4_54",
      "C3_45",
      "C2_TL10",
      "C4_29",
      "C2_21",
      "C3_25",
      "C4_59",
      "C1_19",
      "C3_34",
      "C1_01",
      "C2_24",
      "C1_11",
      "C3_14",
      "C4_48",
      "C3_41",
      "C3_44",
      "C1_18",
      "C4_18",
      "C1_35",
      "C4_39",
      "C4_03",
      "C1_10",
      "C1_33",
      "C2_15",
      "C2_23",
      "C3_30",
      "C4_12",
      "C2_13"
    ]
  }
];

window.CHAPTER_EXAMS = [
  {
    "id": "ch1_de_1",
    "chapter": 1,
    "number": 1,
    "title": "Đề Chương 1 - Số 1",
    "subtitle": "Chương 1: Giới hạn & Liên tục",
    "course_code": "BS0.101.3-1-1-26(N60)",
    "duration_minutes": 35,
    "question_ids": [
      "C1_24",
      "C1_19",
      "C1_04",
      "C1_30",
      "C1_13",
      "C1_20",
      "C1_23",
      "C1_35",
      "C1_03",
      "C1_11",
      "C1_10",
      "C1_29",
      "C1_09",
      "C1_05",
      "C1_01",
      "C1_17",
      "C1_15",
      "C1_21",
      "C1_02",
      "C1_28"
    ]
  },
  {
    "id": "ch1_de_2",
    "chapter": 1,
    "number": 2,
    "title": "Đề Chương 1 - Số 2",
    "subtitle": "Chương 1: Giới hạn & Liên tục",
    "course_code": "BS0.101.3-1-1-26(N60)",
    "duration_minutes": 35,
    "question_ids": [
      "C1_15",
      "C1_08",
      "C1_25",
      "C1_14",
      "C1_09",
      "C1_32",
      "C1_12",
      "C1_37",
      "C1_22",
      "C1_27",
      "C1_36",
      "C1_06",
      "C1_16",
      "C1_31",
      "C1_34",
      "C1_07",
      "C1_33",
      "C1_18",
      "C1_38",
      "C1_26"
    ]
  },
  {
    "id": "ch2_de_1",
    "chapter": 2,
    "number": 1,
    "title": "Đề Chương 2 - Số 1",
    "subtitle": "Chương 2: Đạo hàm & Vi phân",
    "course_code": "BS0.101.3-1-1-26(N60)",
    "duration_minutes": 35,
    "question_ids": [
      "C2_09",
      "C2_13",
      "C2_02",
      "C2_08",
      "C2_21",
      "C2_07",
      "C2_17",
      "C2_10",
      "C2_TL06",
      "C2_23",
      "C2_14",
      "C2_05",
      "C2_18",
      "C2_25",
      "C2_22",
      "C2_26",
      "C2_03",
      "C2_TL05",
      "C2_TL03",
      "C2_24"
    ]
  },
  {
    "id": "ch2_de_2",
    "chapter": 2,
    "number": 2,
    "title": "Đề Chương 2 - Số 2",
    "subtitle": "Chương 2: Đạo hàm & Vi phân",
    "course_code": "BS0.101.3-1-1-26(N60)",
    "duration_minutes": 35,
    "question_ids": [
      "C2_20",
      "C2_19",
      "C2_16",
      "C2_12",
      "C2_07",
      "C2_15",
      "C2_11",
      "C2_TL11",
      "C2_TL04",
      "C2_TL01",
      "C2_TL10",
      "C2_06",
      "C2_03",
      "C2_TL03",
      "C2_TL09",
      "C2_TL02",
      "C2_TL08",
      "C2_TL07",
      "C2_04",
      "C2_24"
    ]
  },
  {
    "id": "ch3_de_1",
    "chapter": 3,
    "number": 1,
    "title": "Đề Chương 3 - Số 1",
    "subtitle": "Chương 3: Tích phân",
    "course_code": "BS0.101.3-1-1-26(N60)",
    "duration_minutes": 35,
    "question_ids": [
      "C3_15",
      "C3_25",
      "C3_03",
      "C3_50",
      "C3_39",
      "C3_48",
      "C3_14",
      "C3_36",
      "C3_27",
      "C3_33",
      "C3_23",
      "C3_19",
      "C3_38",
      "C3_20",
      "C3_16",
      "C3_41",
      "C3_37",
      "C3_10",
      "C3_47",
      "C3_13"
    ]
  },
  {
    "id": "ch3_de_2",
    "chapter": 3,
    "number": 2,
    "title": "Đề Chương 3 - Số 2",
    "subtitle": "Chương 3: Tích phân",
    "course_code": "BS0.101.3-1-1-26(N60)",
    "duration_minutes": 35,
    "question_ids": [
      "C3_43",
      "C3_24",
      "C3_35",
      "C3_08",
      "C3_02",
      "C3_17",
      "C3_07",
      "C3_40",
      "C3_21",
      "C3_44",
      "C3_04",
      "C3_26",
      "C3_45",
      "C3_09",
      "C3_34",
      "C3_12",
      "C3_18",
      "C3_49",
      "C3_28",
      "C3_05"
    ]
  },
  {
    "id": "ch3_de_3",
    "chapter": 3,
    "number": 3,
    "title": "Đề Chương 3 - Số 3",
    "subtitle": "Chương 3: Tích phân",
    "course_code": "BS0.101.3-1-1-26(N60)",
    "duration_minutes": 35,
    "question_ids": [
      "C3_42",
      "C3_46",
      "C3_33",
      "C3_35",
      "C3_22",
      "C3_06",
      "C3_01",
      "C3_41",
      "C3_23",
      "C3_32",
      "C3_30",
      "C3_11",
      "C3_36",
      "C3_45",
      "C3_44",
      "C3_29",
      "C3_05",
      "C3_15",
      "C3_31",
      "C3_14"
    ]
  },
  {
    "id": "ch4_de_1",
    "chapter": 4,
    "number": 1,
    "title": "Đề Chương 4 - Số 1",
    "subtitle": "Chương 4: Chuỗi số & Chuỗi hàm",
    "course_code": "BS0.101.3-1-1-26(N60)",
    "duration_minutes": 35,
    "question_ids": [
      "C4_46",
      "C4_60",
      "C4_20",
      "C4_31",
      "C4_07",
      "C4_50",
      "C4_19",
      "C4_49",
      "C4_61",
      "C4_24",
      "C4_37",
      "C4_05",
      "C4_10",
      "C4_04",
      "C4_43",
      "C4_58",
      "C4_53",
      "C4_47",
      "C4_14",
      "C4_42"
    ]
  },
  {
    "id": "ch4_de_2",
    "chapter": 4,
    "number": 2,
    "title": "Đề Chương 4 - Số 2",
    "subtitle": "Chương 4: Chuỗi số & Chuỗi hàm",
    "course_code": "BS0.101.3-1-1-26(N60)",
    "duration_minutes": 35,
    "question_ids": [
      "C4_38",
      "C4_55",
      "C4_13",
      "C4_09",
      "C4_17",
      "C4_35",
      "C4_59",
      "C4_18",
      "C4_27",
      "C4_36",
      "C4_51",
      "C4_15",
      "C4_01",
      "C4_30",
      "C4_39",
      "C4_48",
      "C4_12",
      "C4_40",
      "C4_57",
      "C4_28"
    ]
  },
  {
    "id": "ch4_de_3",
    "chapter": 4,
    "number": 3,
    "title": "Đề Chương 4 - Số 3",
    "subtitle": "Chương 4: Chuỗi số & Chuỗi hàm",
    "course_code": "BS0.101.3-1-1-26(N60)",
    "duration_minutes": 35,
    "question_ids": [
      "C4_52",
      "C4_54",
      "C4_32",
      "C4_23",
      "C4_03",
      "C4_34",
      "C4_16",
      "C4_26",
      "C4_41",
      "C4_02",
      "C4_45",
      "C4_33",
      "C4_21",
      "C4_29",
      "C4_44",
      "C4_22",
      "C4_25",
      "C4_06",
      "C4_56",
      "C4_11"
    ]
  },
  {
    "id": "ch4_de_4",
    "chapter": 4,
    "number": 4,
    "title": "Đề Chương 4 - Số 4",
    "subtitle": "Chương 4: Chuỗi số & Chuỗi hàm",
    "course_code": "BS0.101.3-1-1-26(N60)",
    "duration_minutes": 35,
    "question_ids": [
      "C4_39",
      "C4_22",
      "C4_52",
      "C4_59",
      "C4_53",
      "C4_05",
      "C4_58",
      "C4_20",
      "C4_06",
      "C4_57",
      "C4_49",
      "C4_08",
      "C4_50",
      "C4_14",
      "C4_16",
      "C4_31",
      "C4_28",
      "C4_12",
      "C4_60",
      "C4_38"
    ]
  }
];
