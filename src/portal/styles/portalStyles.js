const globalStyles = `
html, body, #root {
  margin: 0;
  padding: 0;
  width: 100%;
  min-height: 100%;
}

* {
  box-sizing: border-box;
}

body {
  background: #03070d;
  color: #d6e6f7;
  font-family: Arial, Helvetica, sans-serif;
}

button,
input {
  font: inherit;
}

.app-shell {
  position: relative;
  min-height: 100vh;
  overflow: hidden;
  background:
    radial-gradient(circle at top center, rgba(31, 75, 132, 0.24) 0%, rgba(4, 10, 19, 0) 38%),
    linear-gradient(180deg, #03070d 0%, #07111d 45%, #040912 100%);
}

.bg-grid {
  position: fixed;
  inset: 0;
  pointer-events: none;
  opacity: 0.18;
  background-image:
    linear-gradient(rgba(98, 162, 232, 0.08) 1px, transparent 1px),
    linear-gradient(90deg, rgba(98, 162, 232, 0.08) 1px, transparent 1px);
  background-size: 36px 36px;
}

.bg-glow {
  position: fixed;
  inset: 0;
  pointer-events: none;
  background:
    radial-gradient(circle at 20% 20%, rgba(63, 136, 224, 0.18), transparent 22%),
    radial-gradient(circle at 80% 16%, rgba(63, 136, 224, 0.12), transparent 20%),
    radial-gradient(circle at 50% 80%, rgba(63, 136, 224, 0.1), transparent 24%);
}

.panel-watermark {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 0;
  background-image: url('/logo.png');
  background-repeat: no-repeat;
  background-position: center;
  will-change: opacity;
}

.login-watermark {
  background-size: 420px;
  opacity: 0.16;
  animation: loginWatermarkPulse 4.5s ease-in-out infinite;
}

.main-watermark {
  background-size: 720px;
  opacity: 0.12;
}

@keyframes loginWatermarkPulse {
  0% { opacity: 0.13; }
  50% { opacity: 0.19; }
  100% { opacity: 0.13; }
}

.login-screen,
.portal-screen {
  min-height: 100vh;
  padding: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.terminal-panel {
  position: relative;
  width: 100%;
  isolation: isolate;
  overflow: hidden;
  background:
    linear-gradient(180deg, rgba(10, 18, 30, 0.82) 0%, rgba(6, 13, 23, 0.86) 100%);
  border: 1px solid rgba(117, 171, 235, 0.42);
  box-shadow:
    0 0 0 1px rgba(35, 64, 99, 0.6),
    0 0 45px rgba(0, 0, 0, 0.5),
    inset 0 0 40px rgba(99, 175, 255, 0.04);
}

.terminal-panel::before {
  content: "";
  position: absolute;
  inset: 10px;
  border: 1px solid rgba(103, 157, 220, 0.16);
  pointer-events: none;
}

.login-panel {
  max-width: 900px;
  min-height: 640px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.main-panel {
  max-width: 1480px;
  min-height: calc(100vh - 36px);
  display: flex;
  flex-direction: column;
}

.panel-header,
.login-content,
.warning-bar,
.portal-body,
.system-banner {
  position: relative;
  z-index: 1;
}

.panel-header {
  padding: 16px 22px;
  border-bottom: 1px solid rgba(117, 171, 235, 0.24);
  background: linear-gradient(180deg, rgba(17, 34, 55, 0.92), rgba(12, 23, 37, 0.92));
}

.login-header {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 110px;
  padding-left: 130px;
  padding-right: 22px;
}

.login-header-logo {
  position: absolute;
  left: 22px;
  top: calc(50% - 50px);
}

.login-header-text {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.login-header-text .terminal-label,
.login-header-text .terminal-subline {
  text-align: center;
}

.main-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
}

.header-left {
  display: flex;
  align-items: center;
  gap: 16px;
  min-width: 0;
}

.panel-logo,
.modal-logo {
  width: 100px;
  height: 100px;
  object-fit: contain;
  filter: drop-shadow(0 0 14px rgba(114, 177, 255, 0.38));
  flex-shrink: 0;
}

@keyframes logoFlipIn {
  0% {
    transform: perspective(1000px) rotateY(0deg);
  }
  20% {
    transform: perspective(1000px) rotateY(28deg);
  }
  40% {
    transform: perspective(1000px) rotateY(-18deg);
  }
  60% {
    transform: perspective(1000px) rotateY(12deg);
  }
  80% {
    transform: perspective(1000px) rotateY(-6deg);
  }
  100% {
    transform: perspective(1000px) rotateY(0deg);
  }
}

.panel-logo-flip {
  display: block;
  transform-origin: center;
  backface-visibility: hidden;
  animation: logoFlipIn 3s cubic-bezier(0.22, 1, 0.36, 1) 1;
}

.panel-logo-flip-main {
  display: block;
  transform-origin: center;
  backface-visibility: hidden;
  animation: logoFlipIn 3s cubic-bezier(0.22, 1, 0.36, 1) 1;
}

.terminal-label {
  color: #d8ebff;
  font-size: 1.25rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.terminal-subline {
  margin-top: 2px;
  color: #9dbfe0;
  font-size: 0.95rem;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.header-meta {
  margin-top: 6px;
  display: flex;
  flex-wrap: wrap;
  gap: 18px;
  color: #b9d0e7;
  font-size: 0.9rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

.login-content {
  width: 100%;
  max-width: 520px;
  margin: 0 auto;
  padding: 44px 24px 36px;
  text-align: center;
}

.login-divider {
  width: min(100%, 420px);
  height: 1px;
  margin: 0 auto 28px;
  background: linear-gradient(90deg, transparent, rgba(120, 178, 240, 0.65), transparent);
}

.login-title {
  margin: 0 0 14px;
  color: #eef7ff;
  font-size: clamp(1.8rem, 4vw, 3rem);
  line-height: 0.95;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  text-align: center;
  max-width: 100%;
}

.login-case {
  color: #d8ebff;
  font-size: 1.45rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.login-user {
  margin: 16px 0 30px;
  color: #a8c8e7;
  font-size: 0.98rem;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.form-block {
  margin-bottom: 16px;
  text-align: left;
}

.form-block.narrow {
  max-width: 480px;
}

.field-label {
  display: block;
  margin-bottom: 8px;
  color: #9ec8f4;
  font-size: 0.82rem;
  letter-spacing: 0.12em;
  font-weight: 700;
  text-transform: uppercase;
}

.terminal-input {
  width: 100%;
  height: 52px;
  padding: 0 16px;
  border: 1px solid rgba(99, 151, 211, 0.42);
  outline: none;
  background:
    linear-gradient(180deg, rgba(8, 18, 31, 0.96), rgba(10, 20, 34, 0.98));
  color: #eef8ff;
  font-size: 1rem;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  box-shadow: inset 0 0 18px rgba(82, 146, 215, 0.06);
}

.terminal-input::placeholder {
  color: #6d93b9;
  opacity: 1;
}

.terminal-input:focus {
  border-color: rgba(132, 193, 255, 0.72);
  box-shadow:
    0 0 0 1px rgba(132, 193, 255, 0.25),
    inset 0 0 18px rgba(82, 146, 215, 0.08);
}

.terminal-button {
  min-height: 50px;
  padding: 0 22px;
  border: 1px solid rgba(114, 165, 224, 0.42);
  background:
    linear-gradient(180deg, rgba(20, 48, 83, 0.96), rgba(16, 35, 58, 0.98));
  color: #f1f8ff;
  font-weight: 700;
  font-size: 0.96rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  cursor: pointer;
  box-shadow:
    inset 0 0 18px rgba(133, 189, 255, 0.06),
    0 0 16px rgba(0, 0, 0, 0.15);
  transition: 0.2s ease;
}

.terminal-button:hover {
  border-color: rgba(139, 194, 255, 0.72);
  transform: translateY(-1px);
}

.terminal-button:disabled {
  opacity: 0.75;
  cursor: default;
}

.primary-button {
  min-width: 220px;
  background: linear-gradient(180deg, #3b82c4, #1f4f7a);
  border: 1px solid rgba(140, 200, 255, 0.7);
  box-shadow:
    0 0 12px rgba(100, 170, 255, 0.3),
    inset 0 0 10px rgba(255,255,255,0.08);
}

.ghost-button {
  background:
    linear-gradient(180deg, rgba(11, 23, 38, 0.94), rgba(8, 17, 28, 0.98));
}

.logout-button {
  white-space: nowrap;
}

.system-banner {
  display: flex;
  gap: 10px;
  align-items: center;
  min-height: 48px;
  padding: 10px 18px;
  border-bottom: 1px solid rgba(103, 157, 220, 0.16);
  background: rgba(7, 14, 24, 0.74);
  color: #d8ebff;
  letter-spacing: 0.03em;
}

.system-banner-label {
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #8fd3ff;
}

.system-banner.success {
  color: #dff6ff;
}

.system-banner.warning {
  color: #f3e8c6;
}

.system-banner.error {
  color: #ffd6d6;
}

.warning-bar {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  padding: 18px 24px 22px;
  border-top: 1px solid rgba(117, 171, 235, 0.18);
  color: #d6e4f3;
  font-size: 0.95rem;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.warning-text {
  color: #d79c35;
  font-weight: 700;
}

.mobile-nav {
  display: none;
  padding: 14px 16px 0;
  gap: 10px;
}

.nav-tab {
  flex: 1;
  min-height: 46px;
  border: 1px solid rgba(99, 151, 211, 0.35);
  background: rgba(8, 17, 28, 0.72);
  color: #aed0f1;
  font-size: 0.82rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.nav-tab.active {
  color: #f3f8ff;
  border-color: rgba(145, 201, 255, 0.72);
  box-shadow: inset 0 0 18px rgba(91, 151, 218, 0.12);
}

.portal-body {
  display: grid;
  grid-template-columns: 330px minmax(0, 1fr);
  gap: 18px;
  padding: 18px;
  flex: 1;
}

.sidebar-panel,
.content-panel {
  position: relative;
  z-index: 1;
  background:
    linear-gradient(180deg, rgba(8, 16, 27, 0.62), rgba(6, 12, 21, 0.7));
  border: 1px solid rgba(98, 147, 203, 0.22);
  min-height: 0;
}

.sidebar-panel {
  padding: 20px 16px;
}

.content-panel {
  padding: 22px;
  overflow: auto;
}

.side-title {
  color: #edf7ff;
  font-size: 1.55rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  margin-bottom: 18px;
}

.side-row {
  width: 100%;
  display: flex;
  align-items: center;
  gap: 12px;
  min-height: 58px;
  padding: 0 14px;
  margin-bottom: 10px;
  border: 1px solid rgba(93, 143, 202, 0.32);
  background:
    linear-gradient(180deg, rgba(17, 37, 59, 0.92), rgba(11, 23, 37, 0.95));
  color: #d7e7f8;
  font-size: 0.96rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  cursor: pointer;
  text-align: left;
  transition: 0.2s ease;
}

.side-row:hover {
  border-color: rgba(146, 199, 255, 0.76);
  transform: translateY(-1px);
  box-shadow: inset 0 0 18px rgba(90, 156, 226, 0.08);
}

.side-row:active {
  transform: scale(0.995);
  border-color: rgba(170, 215, 255, 0.9);
}

.side-row.active {
  border-color: rgba(146, 199, 255, 0.74);
  box-shadow: inset 0 0 22px rgba(95, 160, 228, 0.12);
}

.side-icon {
  width: 20px;
  text-align: center;
}

.side-divider {
  height: 1px;
  margin: 18px 0;
  background: rgba(103, 157, 220, 0.18);
}

.sidebar-status {
  display: grid;
  gap: 12px;
}

.status-item {
  padding: 12px 14px;
  border: 1px solid rgba(98, 147, 203, 0.2);
  background: rgba(7, 14, 24, 0.7);
}

.status-label {
  color: #89b6e6;
  font-size: 0.74rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  margin-bottom: 6px;
}

.status-value {
  color: #d6a05e;
  font-size: 0.92rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.status-value.ok {
  color: #97d7ff;
}

.section-header {
  margin-bottom: 20px;
  padding-bottom: 12px;
  border-bottom: 1px solid rgba(103, 157, 220, 0.18);
}

.section-header h2 {
  margin: 0 0 8px;
  color: #eef7ff;
  font-size: clamp(1.45rem, 2vw, 2rem);
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.section-header p {
  margin: 0;
  color: #a9c8e8;
  font-size: 0.98rem;
  line-height: 1.6;
}

.progress-strip {
  margin-bottom: 18px;
  padding: 14px;
  border: 1px solid rgba(103, 157, 220, 0.18);
  background: rgba(9, 18, 30, 0.55);
}

.progress-strip-text {
  color: #cfe0f1;
  font-size: 0.9rem;
  margin-bottom: 10px;
}

.progress-strip-note {
  margin-top: 10px;
  color: #9ec2e4;
  font-size: 0.82rem;
  line-height: 1.5;
}

.progress-bar {
  width: 100%;
  height: 10px;
  border: 1px solid rgba(98, 147, 203, 0.24);
  background: rgba(5, 12, 20, 0.65);
  overflow: hidden;
}

.progress-bar-fill {
  height: 100%;
  background: linear-gradient(90deg, #2f6fa8, #64b4ff);
  box-shadow: 0 0 16px rgba(100, 180, 255, 0.25);
  transition: width 0.35s ease;
}

.file-list {
  display: grid;
  gap: 12px;
}

.evidence-row {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 14px;
  min-height: 68px;
  padding: 0 18px;
  border: 1px solid rgba(101, 154, 214, 0.3);
  background:
    linear-gradient(180deg, rgba(17, 37, 59, 0.9), rgba(10, 21, 35, 0.96));
  color: #e3f0fd;
  cursor: pointer;
  text-align: left;
  transition: 0.2s ease;
}

.evidence-row:hover {
  border-color: rgba(146, 199, 255, 0.76);
  transform: translateY(-1px);
  box-shadow: inset 0 0 18px rgba(90, 156, 226, 0.08);
}

.evidence-row:active {
  transform: scale(0.995);
  border-color: rgba(170, 215, 255, 0.9);
}

.evidence-row.viewed {
  border-color: rgba(110, 174, 235, 0.48);
}

.evidence-row-left,
.evidence-row-right {
  display: flex;
  align-items: center;
  gap: 12px;
}

.evidence-index {
  color: #9fc6ee;
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  min-width: 34px;
}

.evidence-name {
  font-size: 1.02rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.evidence-arrow {
  color: #dbefff;
  font-size: 1.55rem;
  line-height: 1;
}

.viewed-pill {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 24px;
  padding: 0 8px;
  font-size: 0.62rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #9fd3ff;
  border: 1px solid rgba(119, 180, 242, 0.4);
  background: rgba(35, 79, 123, 0.16);
}

.mini-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 94px;
  min-height: 28px;
  padding: 0 10px;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  border: 1px solid;
}

.mini-badge.available {
  color: #9fd3ff;
  border-color: rgba(119, 180, 242, 0.48);
  background: rgba(35, 79, 123, 0.22);
}

.mini-badge.restricted {
  color: #ff8e8e;
  border-color: rgba(215, 92, 92, 0.48);
  background: rgba(107, 26, 26, 0.22);
}

.unlock-panel,
.answer-box {
  max-width: 760px;
  padding: 24px;
  border: 1px solid rgba(99, 151, 211, 0.22);
  background: rgba(8, 16, 27, 0.6);
}

.unlock-requirements {
  display: grid;
  gap: 10px;
  margin-bottom: 22px;
}

.unlock-requirement {
  padding: 10px 12px;
  border: 1px solid rgba(98, 147, 203, 0.22);
  background: rgba(7, 14, 24, 0.6);
  color: #d6e6f7;
  font-size: 0.88rem;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.unlock-requirement.met {
  color: #97d7ff;
  border-color: rgba(119, 180, 242, 0.4);
}

.restricted-title {
  color: #eef8ff;
  font-size: 2rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  text-align: center;
}

.restricted-sub {
  margin: 10px 0 24px;
  color: #9ec2e4;
  font-size: 1rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  text-align: center;
}

.access-denied {
  margin-top: 16px;
  color: #ff7272;
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  line-height: 1.5;
}

.riddle-block {
  margin-top: 24px;
  padding-top: 18px;
  border-top: 1px solid rgba(103, 157, 220, 0.18);
  color: #cfe0f1;
  line-height: 1.7;
}

.helper-note {
  color: #9ec2e4;
  font-size: 0.9rem;
}

.validation-box {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 18px;
  padding: 14px 16px;
  border: 1px solid rgba(103, 157, 220, 0.18);
  background: rgba(9, 18, 30, 0.55);
}

.validation-spinner {
  width: 16px;
  height: 16px;
  border: 2px solid rgba(143, 211, 255, 0.28);
  border-top-color: rgba(143, 211, 255, 0.92);
  border-radius: 999px;
  animation: spin 0.8s linear infinite;
}

.validation-text {
  color: #d8ebff;
  font-size: 0.9rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.resolution-panel {
  position: relative;
  overflow: hidden;
  padding: 28px;
  border: 1px solid rgba(117, 171, 235, 0.28);
  background:
    linear-gradient(180deg, rgba(8, 16, 27, 0.82), rgba(6, 12, 21, 0.88));
  box-shadow:
    inset 0 0 24px rgba(88, 160, 240, 0.04),
    0 0 30px rgba(0, 0, 0, 0.22);
}

.resolution-panel-watermark {
  position: absolute;
  inset: 0;
  pointer-events: none;
  background-image: url('/logo.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: min(42vw, 420px);
  opacity: 0.05;
}

.resolution-topline,
.resolution-suspect-block,
.resolution-grid,
.resolution-summary-grid,
.resolution-status-line,
.resolution-actions {
  position: relative;
  z-index: 1;
}

.resolution-topline {
  color: #8fd3ff;
  font-size: 0.86rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  margin-bottom: 22px;
}

.resolution-suspect-block {
  padding: 20px;
  border: 1px solid rgba(117, 171, 235, 0.24);
  background: rgba(10, 21, 35, 0.55);
  margin-bottom: 22px;
}

.resolution-label {
  color: #9ec8f4;
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  margin-bottom: 8px;
}

.resolution-name {
  color: #f3f8ff;
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  line-height: 1;
}

.resolution-sub {
  margin-top: 12px;
  color: #cfe0f1;
  line-height: 1.7;
  max-width: 780px;
}

.resolution-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 14px;
  margin-bottom: 22px;
}

.resolution-card {
  padding: 18px;
  border: 1px solid rgba(103, 157, 220, 0.2);
  background: rgba(7, 14, 24, 0.62);
}

.resolution-card-title {
  color: #8fd3ff;
  font-size: 0.82rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  margin-bottom: 10px;
}

.resolution-card p {
  margin: 0;
  color: #d7e7f7;
  line-height: 1.7;
}

.resolution-summary-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 14px;
  margin-bottom: 22px;
}

.resolution-mini-card {
  padding: 16px;
  border: 1px solid rgba(103, 157, 220, 0.2);
  background: rgba(7, 14, 24, 0.55);
}

.resolution-mini-label {
  color: #89b6e6;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  margin-bottom: 8px;
}

.resolution-mini-value {
  color: #eef7ff;
  font-size: 1.05rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

.resolution-status-line {
  padding: 14px 16px;
  border: 1px solid rgba(103, 157, 220, 0.18);
  background: rgba(10, 21, 35, 0.5);
  color: #d8ebff;
  font-size: 0.92rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: 22px;
}

.resolution-actions {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.modal-overlay {
  position: fixed;
  inset: 0;
  z-index: 1000;
  background: rgba(2, 7, 14, 0.82);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  backdrop-filter: blur(3px);
}

.modal-panel {
  width: min(1180px, 100%);
  max-height: 90vh;
  overflow: hidden;
  background:
    linear-gradient(180deg, rgba(11, 21, 35, 0.98), rgba(7, 14, 24, 0.99));
  border: 1px solid rgba(117, 171, 235, 0.52);
  box-shadow:
    0 0 0 1px rgba(50, 88, 132, 0.7),
    0 0 50px rgba(0, 0, 0, 0.48),
    inset 0 0 30px rgba(88, 160, 240, 0.05);
  position: relative;
}

.modal-panel::before {
  content: "";
  position: absolute;
  inset: 10px;
  border: 1px solid rgba(103, 157, 220, 0.14);
  pointer-events: none;
}

.modal-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 14px;
  padding: 18px 20px;
  border-bottom: 1px solid rgba(117, 171, 235, 0.22);
  background:
    linear-gradient(180deg, rgba(20, 45, 72, 0.96), rgba(13, 28, 44, 0.96));
  position: relative;
  z-index: 1;
}

.modal-title {
  margin-top: 6px;
  color: #eef8ff;
  font-size: 1.3rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.modal-subtitle {
  margin-top: 4px;
  color: #9fc0df;
  font-size: 0.78rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

.modal-close {
  width: 48px;
  height: 48px;
  border: 1px solid rgba(134, 194, 255, 0.55);
  background:
    linear-gradient(180deg, rgba(34, 86, 136, 0.96), rgba(19, 49, 79, 0.98));
  color: #f4fbff;
  font-size: 1.8rem;
  line-height: 1;
  cursor: pointer;
  box-shadow:
    0 0 16px rgba(90, 160, 240, 0.16),
    inset 0 0 12px rgba(255, 255, 255, 0.06);
}

.modal-close:hover {
  border-color: rgba(164, 214, 255, 0.8);
}

.modal-body {
  padding: 20px;
  max-height: calc(90vh - 170px);
  overflow: auto;
  position: relative;
  z-index: 1;
}

.modal-image,
.modal-video {
  width: 100%;
  max-height: 68vh;
  object-fit: contain;
  display: block;
  border: 1px solid rgba(103, 157, 220, 0.22);
  background: #05090f;
}

.modal-footer {
  position: relative;
  z-index: 1;
  padding: 0 20px 20px;
  border-top: 1px solid rgba(103, 157, 220, 0.14);
  margin-top: 4px;
  padding-top: 16px;
}

.modal-evidence-id {
  margin-bottom: 8px;
  color: #8ec0f4;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.modal-footer p {
  margin: 0;
  color: #cfe0f1;
  line-height: 1.65;
}

@media (max-width: 980px) {
  .portal-body {
    grid-template-columns: 1fr;
  }

  .sidebar-panel {
    display: none;
  }

  .mobile-nav {
    display: flex;
  }

  .content-panel {
    padding: 16px;
  }

  .main-panel {
    min-height: calc(100vh - 20px);
  }

  .panel-logo,
  .modal-logo {
    width: 56px;
    height: 56px;
  }

  .terminal-label {
    font-size: 1rem;
  }

  .header-meta {
    gap: 10px;
    font-size: 0.78rem;
  }

  .logout-button {
    display: none;
  }

  .resolution-grid,
  .resolution-summary-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .login-panel {
    width: 100%;
    max-width: 100%;
    margin: 0;
    border-radius: 0;
  }
}

@media (max-width: 640px) {
  .login-screen,
  .portal-screen {
    padding: 0;
  }

  .login-panel,
  .main-panel {
    min-height: 100vh;
    max-width: 100%;
  }

  .terminal-panel::before {
    inset: 6px;
  }

  .panel-header,
  .modal-header {
    padding: 14px;
  }

  .login-header {
    min-height: 82px;
    padding-left: 100px;
    padding-right: 14px;
  }

  .login-header-logo {
    width: 72px;
    height: 72px;
    top: calc(50% - 32px);
  }

  .header-left {
    gap: 10px;
  }

  .panel-logo,
  .modal-logo {
    width: 42px;
    height: 42px;
  }

  .terminal-label {
    font-size: 0.9rem;
  }

  .terminal-subline {
    font-size: 0.72rem;
  }

  .login-header-text .terminal-label {
    font-size: 0.9rem;
  }

  .login-header-text .terminal-subline {
    font-size: 0.72rem;
  }

  .header-meta {
    margin-top: 4px;
    gap: 8px;
    font-size: 0.68rem;
  }

  .login-content {
    padding: 30px 16px 28px;
  }

  .login-title {
    font-size: 2rem;
  }

  .login-case {
    font-size: 1.1rem;
  }

  .login-user {
    font-size: 0.78rem;
    line-height: 1.5;
  }

  .terminal-input {
    height: 48px;
    font-size: 0.92rem;
  }

  .terminal-button {
    width: 100%;
  }

  .mobile-nav {
    padding: 12px 12px 0;
    gap: 8px;
  }

  .nav-tab {
    min-height: 42px;
    font-size: 0.72rem;
  }

  .content-panel {
    padding: 12px;
  }

  .section-header {
    margin-bottom: 14px;
    padding-bottom: 10px;
  }

  .section-header h2 {
    font-size: 1.15rem;
  }

  .section-header p {
    font-size: 0.86rem;
  }

  .progress-strip {
    padding: 12px;
  }

  .evidence-row {
    min-height: 62px;
    padding: 0 12px;
  }

  .evidence-row-left {
    min-width: 0;
    gap: 8px;
  }

  .evidence-row-right {
    gap: 8px;
  }

  .evidence-index {
    font-size: 0.88rem;
    min-width: 28px;
  }

  .evidence-name {
    font-size: 0.84rem;
    line-height: 1.3;
  }

  .mini-badge {
    min-width: 74px;
    min-height: 24px;
    font-size: 0.6rem;
    padding: 0 8px;
  }

  .viewed-pill {
    display: none;
  }

  .evidence-arrow {
    font-size: 1.2rem;
  }

  .unlock-panel,
  .answer-box,
  .resolution-panel {
    padding: 16px;
  }

  .restricted-title {
    font-size: 1.35rem;
  }

  .restricted-sub {
    font-size: 0.84rem;
  }

  .riddle-block {
    font-size: 0.9rem;
  }

  .warning-bar {
    padding: 14px 16px 18px;
    font-size: 0.76rem;
    line-height: 1.5;
  }

  .system-banner {
    align-items: flex-start;
    padding: 10px 12px;
    font-size: 0.84rem;
    line-height: 1.5;
  }

  .modal-overlay {
    padding: 0;
  }

  .modal-panel {
    width: 100%;
    max-height: 100vh;
    min-height: 100vh;
    border: none;
  }

  .modal-panel::before {
    inset: 6px;
  }

  .modal-body {
    padding: 12px;
    max-height: calc(100vh - 155px);
  }

  .modal-footer {
    padding: 0 12px 14px;
    padding-top: 12px;
  }

  .modal-title {
    font-size: 0.95rem;
  }

  .modal-close {
    width: 40px;
    height: 40px;
    font-size: 1.5rem;
  }

  .resolution-name {
    font-size: 1.8rem;
  }

  .resolution-actions {
    flex-direction: column;
  }
}
`;

export default globalStyles;