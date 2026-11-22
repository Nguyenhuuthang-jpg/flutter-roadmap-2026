// Flutter Roadmap 2026 — dữ liệu và giao diện
// status: "new" = thêm/cập nhật 2025–2026, "deprecated" = không còn khuyến nghị

const UPDATES = [
  "<strong>Flutter 3.50 + Dart 3.14</strong> (11/2026): gọi API native trực tiếp (FFIgen/JNIgen) đã ổn định; package <code>material_ui</code> / <code>cupertino_ui</code> là mặc định cho dự án mới.",
  "<strong>Swift Package Manager</strong> là mặc định cho iOS/macOS từ Flutter 3.44. CocoaPods trunk chuyển sang chỉ đọc từ 2/12/2026.",
  "<strong>Web:</strong> <code>dart:html</code>, <code>dart:js</code>, <code>package:js</code> đã bị deprecate; dùng <code>dart:js_interop</code> + <code>package:web</code>. WebAssembly là hướng build chính.",
  "<strong>Dart 3.x:</strong> records, patterns, sealed class, dot shorthands (3.10), primary constructors (3.12).",
  "<strong>Isar</strong> gốc đã ngừng phát triển; dùng <code>isar_community</code> hoặc Drift / ObjectBox. <strong>App Center</strong> đã ngừng, phần Analytics chỉ còn hỗ trợ đến 3/2027.",
  "<strong>AI:</strong> Dart &amp; Flutter MCP Server, Agentic Hot Reload, Genkit cho Dart (preview), Firebase AI Logic."
];

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
let filter = "all";
let query = "";

// ---------- Render ----------
const $ = (s) => document.querySelector(s);
const escapeHtml = (s) => s.replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const keyOf = (topicId, item) => `${topicId}:${item.name}`;

function tagHtml(status) {
  if (status === "new") return '<span class="tag new">Mới</span>';
  if (status === "deprecated") return '<span class="tag deprecated">Lỗi thời</span>';
  return "";
}

function renderStatic() {
  $("#updates").innerHTML = UPDATES.map((u) => `<li>${u}</li>`).join("");
  $("#toc").innerHTML = STAGES.flatMap((s) => s.topics)
    .map((t) => `<li><a href="#${t.id}">${escapeHtml(t.title)}</a></li>`).join("");
}

function matches(topic, item) {
  if (filter === "new" && item.status !== "new") return false;
  if (filter === "deprecated" && item.status !== "deprecated") return false;
  if (filter === "todo" && (done.has(keyOf(topic.id, item)) || item.status === "deprecated")) return false;
  if (!query) return true;
  const hay = `${item.name} ${item.desc || ""} ${topic.title}`.toLowerCase();
  return hay.includes(query);
}

function renderRoadmap() {
  let html = "";
  let visible = 0;

  STAGES.forEach((stage, i) => {
    let stageHtml = "";
    stage.topics.forEach((topic) => {
      const items = topic.items.filter((it) => matches(topic, it));
      if (!items.length) return;
      visible += items.length;
      const list = items.map((it) => {
        const k = keyOf(topic.id, it);
        const isDone = done.has(k);
        const name = it.url
          ? `<a class="name" href="${it.url}" target="_blank" rel="noopener">${escapeHtml(it.name)}</a>`
          : `<span class="name">${escapeHtml(it.name)}</span>`;
        const box = it.status === "deprecated"
          ? "<span></span>"
          : `<input type="checkbox" data-key="${escapeHtml(k)}" ${isDone ? "checked" : ""} aria-label="Đã học ${escapeHtml(it.name)}">`;
        return `<li class="item ${isDone ? "done" : ""}">${box}<div>${name}${tagHtml(it.status)}<span class="desc">${escapeHtml(it.desc || "")}</span></div></li>`;
      }).join("");
      const open = query || filter !== "all" ? "open" : (i < 2 ? "open" : "");
      stageHtml += `
        <details class="topic" id="${topic.id}" ${open}>
          <summary>${escapeHtml(topic.title)} <span class="count">${items.length} mục</span></summary>
          ${topic.note ? `<p class="topic-note">${escapeHtml(topic.note)}</p>` : ""}
          <ul class="items">${list}</ul>
        </details>`;
    });
    if (stageHtml) {
      html += `
        <section class="stage">
          <h2 class="stage-title"><span class="num">${i + 1}</span>${escapeHtml(stage.title)}</h2>
          <p class="stage-desc">${escapeHtml(stage.desc)}</p>
          ${stageHtml}
        </section>`;
    }
  });

  $("#roadmap").innerHTML = html;
  $("#empty").hidden = visible > 0;
  updateProgress();
}

function updateProgress() {
  const all = STAGES.flatMap((s) => s.topics.flatMap((t) =>
    t.items.filter((it) => it.status !== "deprecated").map((it) => keyOf(t.id, it))));
  const count = all.filter((k) => done.has(k)).length;
  $("#bar-fill").style.width = `${all.length ? (count / all.length) * 100 : 0}%`;
  $("#progress-text").textContent = `${count} / ${all.length} đã học`;
}

// ---------- Sự kiện ----------
$("#roadmap").addEventListener("change", (e) => {
  const key = e.target.dataset.key;
  if (!key) return;
  e.target.checked ? done.add(key) : done.delete(key);
  e.target.closest(".item").classList.toggle("done", e.target.checked);
  save(STORE_KEY, [...done]);
  updateProgress();
});

$("#search").addEventListener("input", (e) => {
  query = e.target.value.trim().toLowerCase();
  renderRoadmap();
});

document.querySelectorAll(".chip").forEach((chip) => {
  chip.addEventListener("click", () => {
    document.querySelectorAll(".chip").forEach((c) => c.classList.remove("active"));
    chip.classList.add("active");
    filter = chip.dataset.filter;
    renderRoadmap();
  });
});

function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
}
const savedTheme = load(THEME_KEY, null);
applyTheme(savedTheme || (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"));
$("#theme").addEventListener("click", () => {
  const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  applyTheme(next);
  save(THEME_KEY, next);
});

renderStatic();
renderRoadmap();
