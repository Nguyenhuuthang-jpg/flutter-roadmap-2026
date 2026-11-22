// Flutter Roadmap 2026 — sơ đồ lộ trình
// status: "new" = thêm/cập nhật 2025–2026, "deprecated" = không còn khuyến nghị

// Điểm mới, hiển thị ngắn gọn ở ô "Có gì mới"
const NEWS = [
  { icon: "🚀", title: "Flutter 3.50 · Dart 3.14", text: "Phát hành 11/2026. Gọi API native trực tiếp đã ổn định." },
  { icon: "🎨", title: "material_ui & cupertino_ui", text: "Material và Cupertino tách thành package riêng." },
  { icon: "🍎", title: "Swift Package Manager", text: "Mặc định từ 3.44. CocoaPods chỉ đọc từ 2/12/2026." },
  { icon: "🌐", title: "Web: js_interop + Wasm", text: "dart:html, package:js đã bị deprecate." },
  { icon: "🎯", title: "Dart 3.x", text: "Records, patterns, sealed class, dot shorthands, primary constructors." },
  { icon: "🤖", title: "AI", text: "MCP Server, Agentic Hot Reload, Genkit, Firebase AI Logic." },
  { icon: "⚠️", title: "Đã ngừng", text: "Isar gốc, App Center, Travis CI (.org), Zapp!" }
];

// Biểu tượng cho từng chủ đề
const ICONS = {
  env: "🛠️", dart: "🎯", widgets: "🧩", design: "🎨", principles: "📐",
  arch: "🏗️", network: "🌐", storage: "🔑", db: "🗄️",
  testing: "🧪", perf: "⚡", internals: "🔬",
  native: "📱", packages: "📦", web: "💻",
  ai: "🤖", security: "🛡️", ci: "🔁", analytics: "📊", store: "🏪"
};

const STAGES = [
  {
    title: "Nền tảng",
    desc: "Cài đặt công cụ và nắm chắc ngôn ngữ Dart.",
    topics: [
      {
        id: "env", title: "Môi trường phát triển",
        items: [
          { name: "Cài đặt Flutter", url: "https://docs.flutter.dev/get-started", desc: "Hướng dẫn chính thức cho Windows, macOS, Linux." },
          { name: "VS Code + extension Flutter", url: "https://docs.flutter.dev/tools/vs-code", desc: "Editor nhẹ, phổ biến nhất cho Flutter." },
          { name: "Android Studio / IntelliJ", url: "https://docs.flutter.dev/tools/android-studio", desc: "IDE đầy đủ, cần cho Android SDK và emulator." },
          { name: "Flutter CLI", url: "https://docs.flutter.dev/reference/flutter-cli", desc: "Các lệnh flutter create, run, build, pub, doctor…" },
          { name: "Dart CLI", url: "https://dart.dev/tools/dart-tool", desc: "dart fix, dart format, dart analyze và dart migrate (mới ở 3.14)." },
          { name: "DartPad", url: "https://dartpad.dev", desc: "Chạy thử Dart & Flutter ngay trên trình duyệt." },
          { name: "Flutter DevTools", url: "https://docs.flutter.dev/tools/devtools", desc: "Inspector, profiler, network, memory." },
          { name: "Dart & Flutter MCP Server", url: "https://dart.dev/tools/mcp-server", desc: "Kết nối trợ lý AI với dự án Flutter của bạn.", status: "new" },
          { name: "Learn Git Branching", url: "https://learngitbranching.js.org", desc: "Học Git tương tác." },
          { name: "Zapp!", desc: "Sandbox online cũ; nên dùng DartPad thay thế.", status: "deprecated" }
        ]
      },
      {
        id: "dart", title: "Ngôn ngữ Dart",
        note: "Dart 3 bắt buộc null safety. Hãy học kỹ records, patterns và sealed class.",
        items: [
          { name: "Dart Language", url: "https://dart.dev/language", desc: "Tổng quan ngôn ngữ (thay cho Language Tour cũ)." },
          { name: "Patterns & Records", url: "https://dart.dev/language/patterns", desc: "Destructuring, switch expression, kiểm tra kiểu an toàn." },
          { name: "Class modifiers (sealed, final, base…)", url: "https://dart.dev/language/class-modifiers", desc: "Mô hình hoá state rõ ràng, switch đầy đủ." },
          { name: "Dot shorthands", url: "https://dart.dev/language/dot-shorthands", desc: "Viết .center thay vì MainAxisAlignment.center (Dart 3.10).", status: "new" },
          { name: "Effective Dart", url: "https://dart.dev/effective-dart", desc: "Quy ước viết code Dart tốt." },
          { name: "Async: Future & Stream", url: "https://dart.dev/libraries/async/async-await", desc: "async/await, Stream, Isolate." },
          { name: "Phân tích tĩnh", url: "https://dart.dev/tools/analysis", desc: "Cấu hình analysis_options.yaml." },
          { name: "Linter rules", url: "https://dart.dev/tools/linter-rules", desc: "Danh sách lint; dùng sẵn package flutter_lints." },
          { name: "DCM", url: "https://dcm.dev", desc: "Thêm lint, chỉ số chất lượng code." }
        ]
      }
    ]
  },
  {
    title: "Xây dựng giao diện",
    desc: "Widget, thiết kế và các nguyên tắc viết code.",
    topics: [
      {
        id: "widgets", title: "Widget cơ bản",
        items: [
          { name: "Giới thiệu widget", url: "https://docs.flutter.dev/ui", desc: "Stateless, Stateful, layout, BuildContext." },
          { name: "Widget catalog", url: "https://docs.flutter.dev/ui/widgets", desc: "Danh mục tất cả widget chính thức." },
          { name: "Layout", url: "https://docs.flutter.dev/ui/layout", desc: "Row, Column, Stack, constraints." },
          { name: "Widget of the Week", url: "https://www.youtube.com/playlist?list=PLjxrf2q8roU23XGwz3Km7sQZFTdB996iG", desc: "Video ngắn về từng widget." },
          { name: "Package of the Week", url: "https://www.youtube.com/playlist?list=PLjxrf2q8roU1quF6ny8oFHJ2gBdrYN_AK", desc: "Video giới thiệu package hay." },
          { name: "Responsive & adaptive", url: "https://docs.flutter.dev/ui/adaptive-responsive", desc: "Một app chạy tốt trên điện thoại, tablet, desktop." }
        ]
      },
      {
        id: "design", title: "Thiết kế",
        note: "Từ Flutter 3.50, Material và Cupertino nằm trong package riêng.",
        items: [
          { name: "material_ui & cupertino_ui", url: "https://docs.flutter.dev/release/whats-new", desc: "Package UI tách khỏi framework, mặc định cho dự án mới.", status: "new" },
          { name: "Material 3", url: "https://m3.material.io", desc: "Hệ thống thiết kế của Google (thay material.io cũ)." },
          { name: "Apple Human Interface Guidelines", url: "https://developer.apple.com/design/human-interface-guidelines", desc: "Nguyên tắc thiết kế cho iOS/macOS." },
          { name: "Theming", url: "https://docs.flutter.dev/cookbook/design/themes", desc: "ThemeData, ColorScheme, dark mode." },
          { name: "Animation", url: "https://docs.flutter.dev/ui/animations", desc: "Implicit, explicit animation, Hero." }
        ]
      },
      {
        id: "principles", title: "Nguyên tắc & design pattern",
        items: [
          { name: "KISS", url: "https://en.wikipedia.org/wiki/KISS_principle", desc: "Giữ mọi thứ đơn giản." },
          { name: "DRY", url: "https://en.wikipedia.org/wiki/Don%27t_repeat_yourself", desc: "Không lặp lại code." },
          { name: "SOLID", url: "https://en.wikipedia.org/wiki/SOLID", desc: "5 nguyên tắc thiết kế hướng đối tượng." },
          { name: "Refactoring Guru", url: "https://refactoring.guru/design-patterns", desc: "Giải thích design pattern dễ hiểu." },
          { name: "Flutter Design Patterns", url: "https://flutterdesignpatterns.com", desc: "Các pattern GoF viết bằng Dart." },
          { name: "Sách “Design Patterns” (Gang of Four)", url: "https://en.wikipedia.org/wiki/Design_Patterns", desc: "Tài liệu kinh điển." }
        ]
      }
    ]
  },
  {
    title: "Dữ liệu & kiến trúc",
    desc: "Quản lý state, gọi API, lưu trữ và tổ chức dự án.",
    topics: [
      {
        id: "arch", title: "Kiến trúc & state management",
        note: "Bắt đầu với hướng dẫn kiến trúc chính thức, sau đó chọn một thư viện state và dùng nhất quán.",
        items: [
          { name: "Hướng dẫn kiến trúc app (chính thức)", url: "https://docs.flutter.dev/app-architecture", desc: "MVVM, repository, các lớp UI / data.", status: "new" },
          { name: "Riverpod", url: "https://pub.dev/packages/flutter_riverpod", desc: "State + DI, an toàn khi compile, rất phổ biến.", status: "new" },
          { name: "Bloc / Cubit", url: "https://pub.dev/packages/flutter_bloc", desc: "Tách logic theo event/state, hợp dự án lớn." },
          { name: "Provider", url: "https://pub.dev/packages/provider", desc: "Đơn giản, phù hợp app nhỏ." },
          { name: "Signals", url: "https://pub.dev/packages/signals", desc: "State dạng reactive, gọn nhẹ." },
          { name: "MobX / async_redux", url: "https://pub.dev/packages/flutter_mobx", desc: "Vẫn dùng được nhưng ít phổ biến hơn." },
          { name: "go_router", url: "https://pub.dev/packages/go_router", desc: "Điều hướng, deep link." },
          { name: "get_it + injectable", url: "https://pub.dev/packages/get_it", desc: "Service locator / dependency injection." },
          { name: "Flutter samples", url: "https://flutter.github.io/samples", desc: "Dự án mẫu chính thức." }
        ]
      },
      {
        id: "network", title: "Networking & JSON",
        items: [
          { name: "REST", url: "https://en.wikipedia.org/wiki/REST", desc: "Kiến thức cơ bản về API." },
          { name: "http", url: "https://pub.dev/packages/http", desc: "Client HTTP chính thức, đơn giản." },
          { name: "dio", url: "https://pub.dev/packages/dio", desc: "Interceptor, retry, upload, huỷ request." },
          { name: "retrofit", url: "https://pub.dev/packages/retrofit", desc: "Sinh code API client từ annotation (dùng với dio)." },
          { name: "json_serializable", url: "https://pub.dev/packages/json_serializable", desc: "Sinh code fromJson / toJson." },
          { name: "freezed", url: "https://pub.dev/packages/freezed", desc: "Data class bất biến, union type." }
        ]
      },
      {
        id: "storage", title: "Lưu trữ đơn giản",
        items: [
          { name: "shared_preferences", url: "https://pub.dev/packages/shared_preferences", desc: "Key-value; nên dùng API SharedPreferencesAsync mới." },
          { name: "flutter_secure_storage", url: "https://pub.dev/packages/flutter_secure_storage", desc: "Lưu token và dữ liệu nhạy cảm." }
        ]
      },
      {
        id: "db", title: "Cơ sở dữ liệu",
        items: [
          { name: "Drift", url: "https://pub.dev/packages/drift", desc: "SQLite có type-safe, reactive, hỗ trợ web.", status: "new" },
          { name: "sqflite", url: "https://pub.dev/packages/sqflite", desc: "SQLite thuần cho mobile." },
          { name: "ObjectBox", url: "https://pub.dev/packages/objectbox", desc: "NoSQL nhanh, có đồng bộ dữ liệu." },
          { name: "isar_community", url: "https://pub.dev/packages/isar_community", desc: "Bản fork được duy trì của Isar.", status: "new" },
          { name: "Isar (gốc)", desc: "Đã ngừng phát triển, không build được với SDK mới. Chuyển sang isar_community.", status: "deprecated" },
          { name: "Cloud Firestore", url: "https://pub.dev/packages/cloud_firestore", desc: "NoSQL trên cloud, realtime." },
          { name: "Firebase Storage", url: "https://pub.dev/packages/firebase_storage", desc: "Lưu file, ảnh trên cloud." },
          { name: "Supabase", url: "https://pub.dev/packages/supabase_flutter", desc: "Backend Postgres mã nguồn mở." }
        ]
      }
    ]
  },
  {
    title: "Chất lượng & hiệu năng",
    desc: "Kiểm thử, đo hiệu năng và hiểu Flutter hoạt động thế nào.",
    topics: [
      {
        id: "testing", title: "Kiểm thử",
        items: [
          { name: "Tổng quan testing", url: "https://docs.flutter.dev/testing/overview", desc: "Unit, widget và integration test." },
          { name: "mocktail", url: "https://pub.dev/packages/mocktail", desc: "Mock không cần sinh code." },
          { name: "integration_test", url: "https://docs.flutter.dev/testing/integration-tests", desc: "Test end-to-end chính thức." },
          { name: "Patrol", url: "https://pub.dev/packages/patrol", desc: "E2E test, tương tác được với UI native." },
          { name: "TDD", url: "https://en.wikipedia.org/wiki/Test-driven_development", desc: "Viết test trước khi viết code." },
          { name: "BDD", url: "https://en.wikipedia.org/wiki/Behavior-driven_development", desc: "Test theo hành vi người dùng." }
        ]
      },
      {
        id: "perf", title: "Hiệu năng & profiling",
        items: [
          { name: "Performance", url: "https://docs.flutter.dev/perf", desc: "Best practice, tránh rebuild thừa." },
          { name: "UI performance", url: "https://docs.flutter.dev/perf/ui-performance", desc: "Phân tích jank với DevTools." },
          { name: "Impeller", url: "https://docs.flutter.dev/perf/impeller", desc: "Engine render mặc định trên iOS và Android.", status: "new" },
          { name: "App size", url: "https://docs.flutter.dev/perf/app-size", desc: "Đo và giảm dung lượng app." }
        ]
      },
      {
        id: "internals", title: "Bên trong Flutter",
        items: [
          { name: "Architectural overview", url: "https://docs.flutter.dev/resources/architectural-overview", desc: "Widget, Element, RenderObject, engine." },
          { name: "Introduction to Dart VM", url: "https://mrale.ph/dartvm/", desc: "Cách Dart VM chạy code." },
          { name: "Flutter under the hood (Surf)", url: "https://surf.dev/flutter-under-the-hood/", desc: "Bài viết chuyên sâu." }
        ]
      }
    ]
  },
  {
    title: "Nền tảng & native",
    desc: "Làm việc với iOS, Android, web và desktop.",
    topics: [
      {
        id: "native", title: "Native interop",
        items: [
          { name: "Direct native interop (FFIgen, JNIgen)", url: "https://dart.dev/interop", desc: "Gọi API Objective-C/Swift, Java/Kotlin, C trực tiếp, đã ổn định từ 3.50.", status: "new" },
          { name: "Platform channels", url: "https://docs.flutter.dev/platform-integration/platform-channels", desc: "Cách truyền thống để giao tiếp với native." },
          { name: "Kotlin cho Android", url: "https://developer.android.com/courses", desc: "Khoá học Android chính thức." },
          { name: "Stanford CS193p (SwiftUI)", url: "https://cs193p.sites.stanford.edu", desc: "Khoá iOS miễn phí của Stanford." }
        ]
      },
      {
        id: "packages", title: "Package manager",
        items: [
          { name: "Phát triển package & plugin", url: "https://docs.flutter.dev/packages-and-plugins/developing-packages", desc: "Tự viết và publish lên pub.dev." },
          { name: "Swift Package Manager", url: "https://docs.flutter.dev/packages-and-plugins/swift-package-manager/for-app-developers", desc: "Mặc định cho iOS/macOS từ Flutter 3.44.", status: "new" },
          { name: "CocoaPods", url: "https://blog.cocoapods.org/CocoaPods-Specs-Repo/", desc: "Chế độ bảo trì; trunk chỉ đọc từ 2/12/2026.", status: "deprecated" },
          { name: "Gradle (Kotlin DSL)", url: "https://docs.flutter.dev/release/breaking-changes/flutter-gradle-plugin-apply", desc: "Build system Android, dùng file .kts." }
        ]
      },
      {
        id: "web", title: "Web & desktop",
        items: [
          { name: "Flutter Web + WebAssembly", url: "https://docs.flutter.dev/platform-integration/web/wasm", desc: "Build Wasm cho hiệu năng cao hơn.", status: "new" },
          { name: "dart:js_interop + package:web", url: "https://dart.dev/interop/js-interop", desc: "Thay cho dart:html, dart:js, package:js.", status: "new" },
          { name: "dart:html / package:js", desc: "Đã deprecate, chuyển sang js_interop.", status: "deprecated" },
          { name: "Desktop", url: "https://docs.flutter.dev/platform-integration/desktop", desc: "Windows, macOS, Linux." }
        ]
      }
    ]
  },
  {
    title: "AI trong Flutter",
    desc: "Công cụ AI cho lập trình viên và tính năng AI trong app.",
    topics: [
      {
        id: "ai", title: "AI",
        items: [
          { name: "AI trong Flutter", url: "https://docs.flutter.dev/ai", desc: "Tổng quan chính thức về AI cho Flutter.", status: "new" },
          { name: "Firebase AI Logic", url: "https://pub.dev/packages/firebase_ai", desc: "Gọi Gemini từ app Flutter.", status: "new" },
          { name: "Genkit cho Dart (preview)", url: "https://genkit.dev", desc: "Framework xây dựng tính năng AI.", status: "new" },
          { name: "GenUI", url: "https://docs.flutter.dev/ai/genui", desc: "Giao diện do AI sinh ra lúc chạy.", status: "new" }
        ]
      }
    ]
  },
  {
    title: "Phát hành & vận hành",
    desc: "Bảo mật, CI/CD, theo dõi và đưa app lên store.",
    topics: [
      {
        id: "security", title: "Bảo mật",
        items: [
          { name: "OWASP MASVS", url: "https://mas.owasp.org/MASVS/", desc: "Tiêu chuẩn bảo mật ứng dụng di động." },
          { name: "Obfuscation", url: "https://docs.flutter.dev/deployment/obfuscate", desc: "Làm rối code Dart khi build." },
          { name: "freeRASP", url: "https://pub.dev/packages/freerasp", desc: "Phát hiện root, jailbreak, giả mạo." }
        ]
      },
      {
        id: "ci", title: "CI/CD",
        items: [
          { name: "GitHub Actions", url: "https://docs.github.com/actions", desc: "CI miễn phí cho repo GitHub.", status: "new" },
          { name: "Codemagic", url: "https://codemagic.io", desc: "CI/CD chuyên cho Flutter." },
          { name: "fastlane", url: "https://fastlane.tools", desc: "Tự động build, ký và đưa lên store." },
          { name: "Danger", url: "https://danger.systems", desc: "Tự động review pull request." },
          { name: "SonarQube", url: "https://www.sonarsource.com/products/sonarqube/", desc: "Phân tích chất lượng code." },
          { name: "Travis CI (travis-ci.org)", desc: "Đã đóng; dùng GitHub Actions hoặc Codemagic.", status: "deprecated" }
        ]
      },
      {
        id: "analytics", title: "Analytics & crash",
        items: [
          { name: "Firebase Analytics", url: "https://firebase.google.com/docs/analytics", desc: "Theo dõi hành vi người dùng." },
          { name: "Firebase Crashlytics", url: "https://firebase.google.com/docs/crashlytics", desc: "Báo cáo crash." },
          { name: "Sentry", url: "https://pub.dev/packages/sentry_flutter", desc: "Theo dõi lỗi và hiệu năng." },
          { name: "Mixpanel", url: "https://docs.mixpanel.com/docs/tracking-methods/sdks/flutter", desc: "Phân tích sản phẩm." },
          { name: "Datadog", url: "https://pub.dev/packages/datadog_flutter_plugin", desc: "Giám sát RUM và log." },
          { name: "App Center Analytics", url: "https://learn.microsoft.com/appcenter/retirement", desc: "App Center đã ngừng; Analytics chỉ còn đến 3/2027.", status: "deprecated" }
        ]
      },
      {
        id: "store", title: "Phát hành lên store",
        items: [
          { name: "Phát hành Android", url: "https://docs.flutter.dev/deployment/android", desc: "Ký app, build AAB, Google Play." },
          { name: "Phát hành iOS", url: "https://docs.flutter.dev/deployment/ios", desc: "Xcode, TestFlight, App Store." },
          { name: "App Store Review Guidelines", url: "https://developer.apple.com/app-store/review/guidelines/", desc: "Quy định duyệt app của Apple." },
          { name: "Google Play policy", url: "https://play.google.com/about/developer-content-policy/", desc: "Chính sách nội dung của Google Play." }
        ]
      }
    ]
  }
];

// ---------- Trạng thái ----------
const STORE_KEY = "flutter-roadmap-done";
const THEME_KEY = "flutter-roadmap-theme";

function load(key, fallback) {
  try { const v = localStorage.getItem(key); return v ? JSON.parse(v) : fallback; }
  catch { return fallback; }
}
function save(key, value) {
  try { localStorage.setItem(key, JSON.stringify(value)); } catch { /* bỏ qua */ }
}

const done = new Set(load(STORE_KEY, []));
let activeId = null;

const $ = (s) => document.querySelector(s);
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const keyOf = (topicId, item) => `${topicId}:${item.name}`;
const learnable = (t) => t.items.filter((it) => it.status !== "deprecated");

// Tra cứu nhanh: id chủ đề -> { topic, stage, stageIndex }
const TOPICS = {};
STAGES.forEach((stage, si) => stage.topics.forEach((topic) => { TOPICS[topic.id] = { topic, stage, si }; }));

function topicProgress(t) {
  const list = learnable(t);
  const n = list.filter((it) => done.has(keyOf(t.id, it))).length;
  return { n, total: list.length };
}

// ---------- Sơ đồ ----------
function nodeHtml(id, icon, label, meta, extra = "") {
  return `<button class="node ${extra}" data-id="${id}" role="listitem">
    <span class="ico" aria-hidden="true">${icon}</span>
    <span class="label">${esc(label)}</span>
    <span class="meta">${meta}</span>
  </button>`;
}

function row(side, inner) {
  const left = side === "left" ? inner : "";
  const right = side === "right" ? inner : "";
  return `<div class="row"><div class="slot left">${left}</div><span class="dot"></span><div class="slot right">${right}</div></div>`;
}

function renderMap() {
  let html = `<div class="milestone"><span>Bắt đầu</span></div>`;
  html += row("right", nodeHtml("news", "✨", "Có gì mới 2026", `${NEWS.length}`, "special"));

  let side = 0;
  STAGES.forEach((stage, si) => {
    html += `<div class="milestone"><span><span class="num">${si + 1}</span>${esc(stage.title)}</span></div>`;
    stage.topics.forEach((t) => {
      const { n, total } = topicProgress(t);
      const complete = total > 0 && n === total;
      const meta = complete ? "✓" : `${n}/${total}`;
      html += row(side++ % 2 ? "right" : "left",
        nodeHtml(t.id, ICONS[t.id] || "•", t.title, meta, complete ? "complete" : ""));
    });
  });

  html += `<div class="milestone end"><span>Sẵn sàng phát hành 🎉</span></div>`;
  $("#map").innerHTML = html;
  markActive();
}

function markActive() {
  document.querySelectorAll(".node").forEach((n) => n.classList.toggle("active", n.dataset.id === activeId));
}

// ---------- Khung chi tiết ----------
function closeBtn() {
  return `<button class="icon-btn p-close" data-close aria-label="Đóng">✕</button>`;
}

function renderPanel() {
  const body = $("#panel-body");

  if (!activeId) {
    body.innerHTML = `<div class="empty-state"><div class="big">🗺️</div>
      <p>Chọn một ô trên sơ đồ để xem tài liệu và đánh dấu những gì bạn đã học.</p></div>`;
    return;
  }

  if (activeId === "news") {
    body.innerHTML = `
      <div class="p-head"><span class="ico">✨</span>
        <div><div class="p-stage">Cập nhật 11/2026</div><h2 class="p-title">Có gì mới</h2></div>${closeBtn()}</div>
      <ul class="news">${NEWS.map((x) => `<li><span class="n-ico">${x.icon}</span><div><b>${esc(x.title)}</b><span>${esc(x.text)}</span></div></li>`).join("")}</ul>`;
    return;
  }

  const { topic, stage, si } = TOPICS[activeId];
  const { n, total } = topicProgress(topic);
  const links = topic.items.map((it) => {
    const k = keyOf(topic.id, it);
    const isDone = done.has(k);
    const old = it.status === "deprecated";
    const name = it.url
      ? `<a class="name" href="${esc(it.url)}" target="_blank" rel="noopener">${esc(it.name)}</a>`
      : `<span class="name">${esc(it.name)}</span>`;
    const tag = it.status === "new" ? `<span class="tag new">Mới</span>` : old ? `<span class="tag deprecated">Lỗi thời</span>` : "";
    const box = old ? `<span></span>` : `<input type="checkbox" data-key="${esc(k)}" ${isDone ? "checked" : ""} aria-label="Đã học ${esc(it.name)}">`;
    return `<li class="link ${isDone ? "done" : ""} ${old ? "old" : ""}">${box}<div>${name}${tag}${it.desc ? `<span class="desc">${esc(it.desc)}</span>` : ""}</div></li>`;
  }).join("");

  body.innerHTML = `
    <div class="p-head"><span class="ico">${ICONS[topic.id] || "•"}</span>
      <div><div class="p-stage">Giai đoạn ${si + 1} · ${esc(stage.title)}</div><h2 class="p-title">${esc(topic.title)}</h2></div>${closeBtn()}</div>
    <div class="p-progress"><div class="bar"><span style="width:${total ? (n / total) * 100 : 0}%"></span></div>${n}/${total}</div>
    ${topic.note ? `<p class="p-note">${esc(topic.note)}</p>` : ""}
    <ul class="links">${links}</ul>`;
}

function updateOverall() {
  let n = 0, total = 0;
  Object.values(TOPICS).forEach(({ topic }) => { const p = topicProgress(topic); n += p.n; total += p.total; });
  const pct = total ? Math.round((n / total) * 100) : 0;
  $("#bar-fill").style.width = pct + "%";
  $("#progress-text").textContent = `${pct}%`;
}

// ---------- Mở / đóng ----------
const isMobile = () => matchMedia("(max-width: 900px)").matches;

function openTopic(id) {
  activeId = id;
  markActive();
  renderPanel();
  $("#panel").scrollTop = 0;
  if (isMobile()) { $("#panel").classList.add("open"); $("#scrim").hidden = false; }
}

function closePanel() {
  $("#panel").classList.remove("open");
  $("#scrim").hidden = true;
  if (!isMobile()) { activeId = null; markActive(); renderPanel(); }
}

// ---------- Sự kiện ----------
$("#map").addEventListener("click", (e) => {
  const node = e.target.closest(".node");
  if (node) openTopic(node.dataset.id);
});

$("#panel").addEventListener("click", (e) => {
  if (e.target.closest("[data-close]")) closePanel();
});

$("#panel").addEventListener("change", (e) => {
  const key = e.target.dataset.key;
  if (!key) return;
  e.target.checked ? done.add(key) : done.delete(key);
  save(STORE_KEY, [...done]);
  renderPanel();
  renderMap();
  updateOverall();
});

$("#scrim").addEventListener("click", closePanel);
document.addEventListener("keydown", (e) => { if (e.key === "Escape") closePanel(); });

function applyTheme(theme) { document.documentElement.dataset.theme = theme; }
applyTheme(load(THEME_KEY, null) || (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"));
$("#theme").addEventListener("click", () => {
  const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  applyTheme(next);
  save(THEME_KEY, next);
});

// Khởi tạo: trên máy tính mở sẵn ô đầu tiên để khung bên cạnh không trống
renderMap();
if (!isMobile()) activeId = "news";
markActive();
renderPanel();
updateOverall();
