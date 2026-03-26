/* ── PChat Site — i18n ── */
(function () {
  'use strict';

  var T = {
    /* ────── Common (nav / footer) ────── */
    'nav.features':    { en: 'Features',       'zh-Hans': '功能特性',     'zh-Hant': '功能特色' },
    'nav.download':    { en: 'Download',       'zh-Hans': '下载',         'zh-Hant': '下載' },
    'nav.privacy':     { en: 'Privacy',        'zh-Hans': '隐私政策',     'zh-Hant': '隱私政策' },
    'nav.terms':       { en: 'Terms',          'zh-Hans': '用户协议',     'zh-Hant': '用戶協議' },
    'nav.home':        { en: 'Home',           'zh-Hans': '首页',         'zh-Hant': '首頁' },
    'nav.faq':         { en: 'FAQ',            'zh-Hans': '常见问题',     'zh-Hant': '常見問題' },
    'footer.privacy':  { en: 'Privacy Policy', 'zh-Hans': '隐私政策',     'zh-Hant': '隱私政策' },
    'footer.terms':    { en: 'Terms of Service','zh-Hans':'用户协议',     'zh-Hant': '用戶協議' },
    'footer.faq':      { en: 'FAQ',            'zh-Hans': '常见问题',     'zh-Hant': '常見問題' },
    'footer.contact':  { en: 'Contact',        'zh-Hans': '联系我们',     'zh-Hant': '聯繫我們' },
    'footer.copyright':{ en: '\u00a9 2025 PChat. All rights reserved.', 'zh-Hans': '\u00a9 2025 PChat. 保留所有权利。', 'zh-Hant': '\u00a9 2025 PChat. 保留所有權利。' },

    /* ────── index.html ────── */
    'index.title':       { en: 'PChat \u2014 Connect Your City', 'zh-Hans': 'PChat \u2014 连接你的城市', 'zh-Hant': 'PChat \u2014 連接你的城市' },
    'index.hero.h1':     { en: 'Your <span class="city">City</span>,<br>Your <span class="highlight">Community</span>', 'zh-Hans': '你的<span class="city">城市</span>，<br>你的<span class="highlight">社区</span>', 'zh-Hant': '你的<span class="city">城市</span>，<br>你的<span class="highlight">社區</span>' },
    'index.hero.p':      { en: 'PChat is a fast, secure messenger designed for local connections. Discover neighbors, join city groups, and build real community \u2014 right where you live.', 'zh-Hans': 'PChat 是一款快速、安全的即时通讯应用，专为本地社区打造。发现邻居，加入城市群组，建立真正的社区 \u2014 就在你身边。', 'zh-Hant': 'PChat 是一款快速、安全的即時通訊應用，專為本地社區打造。發現鄰居，加入城市群組，建立真正的社區 \u2014 就在你身邊。' },
    'index.hero.appstore':{ en: 'App Store',   'zh-Hans': 'App Store',    'zh-Hant': 'App Store' },
    'index.hero.learn':  { en: 'Learn More',   'zh-Hans': '了解更多',     'zh-Hant': '了解更多' },
    'index.feat.title':  { en: 'Built for Local Living', 'zh-Hans': '为本地生活而生', 'zh-Hant': '為本地生活而生' },
    'index.feat.sub':    { en: 'More than a messaging app \u2014 PChat is your digital neighborhood, connecting you with the people and places around you.', 'zh-Hans': '不仅仅是一款聊天应用 \u2014 PChat 是你的数字社区，连接你与周围的人和地方。', 'zh-Hant': '不僅僅是一款聊天應用 \u2014 PChat 是你的數位社區，連接你與周圍的人和地方。' },
    'index.f1.h':  { en: 'City Communities',    'zh-Hans': '城市社区',     'zh-Hant': '城市社區' },
    'index.f1.p':  { en: 'Join groups based on your neighborhood, city, or interests. Discover local events, share recommendations, and never miss what\u2019s happening nearby.', 'zh-Hans': '加入基于社区、城市或兴趣的群组。发现本地活动，分享推荐，不错过身边的精彩。', 'zh-Hant': '加入基於社區、城市或興趣的群組。發現本地活動，分享推薦，不錯過身邊的精彩。' },
    'index.f2.h':  { en: 'Private & Secure',    'zh-Hans': '私密安全',     'zh-Hant': '私密安全' },
    'index.f2.p':  { en: 'End-to-end encrypted secret chats, self-destructing messages, and full control over your data. Your conversations stay between you and the people you trust.', 'zh-Hans': '端到端加密的私密聊天、阅后即焚消息，以及对数据的完全掌控。你的对话只属于你和你信任的人。', 'zh-Hant': '端到端加密的私密聊天、閱後即焚訊息，以及對資料的完全掌控。你的對話只屬於你和你信任的人。' },
    'index.f3.h':  { en: 'Lightning Fast',      'zh-Hans': '极速传输',     'zh-Hant': '極速傳輸' },
    'index.f3.p':  { en: 'Messages delivered instantly. Send texts, voice messages, photos, videos, and files of any size with zero lag \u2014 even on slow networks.', 'zh-Hans': '消息即时送达。发送文字、语音、照片、视频和任意大小的文件，零延迟 \u2014 即使在慢速网络下。', 'zh-Hant': '訊息即時送達。傳送文字、語音、照片、影片和任意大小的檔案，零延遲 \u2014 即使在慢速網路下。' },
    'index.f4.h':  { en: 'Neighborhood Groups',  'zh-Hans': '邻里群组',    'zh-Hant': '鄰里群組' },
    'index.f4.p':  { en: 'Create or join groups for your apartment complex, street, or district. Coordinate with neighbors, share alerts, and build stronger communities.', 'zh-Hans': '创建或加入小区、街道或区域群组。与邻居协作，分享提醒，共建更紧密的社区。', 'zh-Hant': '建立或加入社區、街道或區域群組。與鄰居協作，分享提醒，共建更緊密的社區。' },
    'index.f5.h':  { en: 'Voice & Calls',       'zh-Hans': '语音通话',     'zh-Hant': '語音通話' },
    'index.f5.p':  { en: 'Crystal-clear voice messages and high-quality calls. Stay in touch hands-free while you\u2019re on the move around your city.', 'zh-Hans': '清晰的语音消息和高质量通话。在城市中移动时，随时保持联系。', 'zh-Hant': '清晰的語音訊息和高品質通話。在城市中移動時，隨時保持聯繫。' },
    'index.f6.h':  { en: 'Multi-Language',       'zh-Hans': '多语言支持',   'zh-Hant': '多語言支援' },
    'index.f6.p':  { en: 'PChat speaks your language. Full support for English, Simplified Chinese, Traditional Chinese and more \u2014 making local communities truly inclusive.', 'zh-Hans': 'PChat 说你的语言。全面支持英文、简体中文、繁体中文等语言 \u2014 让本地社区真正包容。', 'zh-Hant': 'PChat 說你的語言。全面支援英文、簡體中文、繁體中文等語言 \u2014 讓本地社區真正包容。' },
    'index.cta.h':   { en: 'Start Connecting Locally', 'zh-Hans': '开始本地连接', 'zh-Hant': '開始本地連接' },
    'index.cta.p':   { en: 'Download PChat and discover your city community today.', 'zh-Hans': '立即下载 PChat，发现你的城市社区。', 'zh-Hant': '立即下載 PChat，發現你的城市社區。' },
    'index.cta.btn': { en: 'Download on the App Store', 'zh-Hans': '在 App Store 下载', 'zh-Hant': '在 App Store 下載' },

    /* ────── tos.html ────── */
    'tos.title':     { en: 'Terms of Service \u2014 PChat', 'zh-Hans': '用户协议 \u2014 PChat', 'zh-Hant': '用戶協議 \u2014 PChat' },
    'tos.h1':        { en: 'Terms of Service',  'zh-Hans': '用户协议',     'zh-Hant': '用戶協議' },
    'tos.updated':   { en: 'Last updated: March 25, 2026', 'zh-Hans': '最后更新：2026 年 3 月 25 日', 'zh-Hant': '最後更新：2026 年 3 月 25 日' },

    'tos.s1.h':  { en: '1. Introduction',  'zh-Hans': '1. 引言', 'zh-Hant': '1. 引言' },
    'tos.s1.p':  { en: '1.1 Welcome to PChat. Please read this agreement carefully before using the application. By using PChat, you agree to the entire contents of this agreement.', 'zh-Hans': '1.1 欢迎使用 PChat，在使用本应用之前，请仔细阅读本协议，使用本应用即表示您同意本协议的全部内容。', 'zh-Hant': '1.1 歡迎使用 PChat，在使用本應用之前，請仔細閱讀本協議，使用本應用即表示您同意本協議的全部內容。' },

    'tos.s2.h':  { en: '2. Account Registration & Use', 'zh-Hans': '2. 账户注册与使用', 'zh-Hant': '2. 帳戶註冊與使用' },
    'tos.s2.p1': { en: '2.1 You must provide truthful, accurate, and complete information, and you are responsible for the security of your account.', 'zh-Hans': '2.1 您须提供真实、准确、完整的信息，并对您的账户安全负责。', 'zh-Hant': '2.1 您須提供真實、準確、完整的資訊，並對您的帳戶安全負責。' },
    'tos.s2.p2': { en: '2.2 You may not share your account with others or use another person\u2019s account.', 'zh-Hans': '2.2 您不得与他人共享账户或使用他人账户。', 'zh-Hant': '2.2 您不得與他人共享帳戶或使用他人帳戶。' },

    'tos.s3.h':  { en: '3. User Conduct', 'zh-Hans': '3. 用户行为规范', 'zh-Hant': '3. 用戶行為規範' },
    'tos.s3.p1': { en: '3.1 You are prohibited from publishing or distributing content that is illegal, harmful, violent, harassing, privacy-infringing, hateful, discriminatory, or otherwise objectionable.', 'zh-Hans': '3.1 禁止发布或传播违法、有害、暴力、骚扰、侵犯隐私、仇恨言论、歧视或其他令人反感的内容。', 'zh-Hant': '3.1 禁止發布或傳播違法、有害、暴力、騷擾、侵犯隱私、仇恨言論、歧視或其他令人反感的內容。' },
    'tos.s3.p2': { en: '3.2 You are prohibited from abusing, harassing, defrauding, or threatening others.', 'zh-Hans': '3.2 禁止滥用、骚扰、欺诈或威胁他人。', 'zh-Hant': '3.2 禁止濫用、騷擾、欺詐或威脅他人。' },
    'tos.s3.p3': { en: '3.3 You are prohibited from collecting, storing, or sharing others\u2019 information without authorization.', 'zh-Hans': '3.3 禁止未经授权收集、存储或共享他人信息。', 'zh-Hant': '3.3 禁止未經授權收集、儲存或共享他人資訊。' },
    'tos.s3.p4': { en: '3.4 You are prohibited from distributing spam, malware, or viruses.', 'zh-Hans': '3.4 禁止传播垃圾信息、恶意软件或病毒。', 'zh-Hant': '3.4 禁止傳播垃圾資訊、惡意軟體或病毒。' },
    'tos.s3.p5': { en: '3.5 Users who violate these terms may have their accounts suspended or terminated.', 'zh-Hans': '3.5 违反本条款的用户可能会被封禁或终止账户。', 'zh-Hant': '3.5 違反本條款的用戶可能會被封禁或終止帳戶。' },

    'tos.s4.h':  { en: '4. Intellectual Property', 'zh-Hans': '4. 知识产权', 'zh-Hant': '4. 知識產權' },
    'tos.s4.p1': { en: '4.1 All content of this application (including but not limited to software, text, images, audio, and video) is protected by intellectual property laws.', 'zh-Hans': '4.1 本应用的所有内容（包括但不限于软件、文本、图片、音频、视频）均受知识产权法律保护。', 'zh-Hant': '4.1 本應用的所有內容（包括但不限於軟體、文字、圖片、音訊、影片）均受知識產權法律保護。' },
    'tos.s4.p2': { en: '4.2 You may not copy, modify, distribute, or commercially use any part of this application without authorization.', 'zh-Hans': '4.2 您不得未经授权复制、修改、传播或商业使用本应用的任何部分。', 'zh-Hant': '4.2 您不得未經授權複製、修改、傳播或商業使用本應用的任何部分。' },

    'tos.s5.h':  { en: '5. Privacy Policy', 'zh-Hans': '5. 隐私政策', 'zh-Hant': '5. 隱私政策' },
    'tos.s5.p':  { en: '5.1 This application respects user privacy. For details, please refer to our <a href="privacy.html">Privacy Policy</a>.', 'zh-Hans': '5.1 本应用尊重用户隐私，详情请参阅我们的<a href="privacy.html">《隐私政策》</a>。', 'zh-Hant': '5.1 本應用尊重用戶隱私，詳情請參閱我們的<a href="privacy.html">《隱私政策》</a>。' },

    'tos.s6.h':  { en: '6. Disclaimer', 'zh-Hans': '6. 免责声明', 'zh-Hant': '6. 免責聲明' },
    'tos.s6.p1': { en: '6.1 We do not make any express or implied warranties regarding the stability, security, or availability of this application.', 'zh-Hans': '6.1 我们不对其稳定性、安全性、可用性做任何明示或暗示的担保。', 'zh-Hant': '6.1 我們不對其穩定性、安全性、可用性做任何明示或暗示的擔保。' },
    'tos.s6.p2': { en: '6.2 We are not liable for any direct or indirect losses caused by the use of this application.', 'zh-Hans': '6.2 我们不对因使用本应用造成的直接或间接损失承担责任。', 'zh-Hant': '6.2 我們不對因使用本應用造成的直接或間接損失承擔責任。' },

    'tos.s7.h':  { en: '7. Termination & Changes', 'zh-Hans': '7. 终止与变更', 'zh-Hant': '7. 終止與變更' },
    'tos.s7.p1': { en: '7.1 We reserve the right to modify or terminate the services of this application at any time.', 'zh-Hans': '7.1 我们有权随时修改或终止本应用的服务。', 'zh-Hant': '7.1 我們有權隨時修改或終止本應用的服務。' },
    'tos.s7.p2': { en: '7.2 Users who violate this agreement may have their access restricted or terminated.', 'zh-Hans': '7.2 违反本协议的用户可能被限制或终止使用权。', 'zh-Hant': '7.2 違反本協議的用戶可能被限制或終止使用權。' },

    'tos.s8.h':  { en: '8. Contact Us', 'zh-Hans': '8. 联系我们', 'zh-Hant': '8. 聯繫我們' },
    'tos.s8.p':  { en: '8.1 If you have any questions, please contact us at <a href="mailto:pchat2026@gmail.com">pchat2026@gmail.com</a>.', 'zh-Hans': '8.1 如果您有任何问题，请通过 <a href="mailto:pchat2026@gmail.com">pchat2026@gmail.com</a> 与我们联系。', 'zh-Hant': '8.1 如果您有任何問題，請透過 <a href="mailto:pchat2026@gmail.com">pchat2026@gmail.com</a> 與我們聯繫。' },

    /* ────── privacy.html ────── */
    'priv.title':    { en: 'Privacy Policy \u2014 PChat', 'zh-Hans': '隐私政策 \u2014 PChat', 'zh-Hant': '隱私政策 \u2014 PChat' },
    'priv.h1':       { en: 'Privacy Policy',    'zh-Hans': '隐私政策',     'zh-Hant': '隱私政策' },
    'priv.updated':  { en: 'Last updated: March 25, 2026', 'zh-Hans': '最后更新：2026 年 3 月 25 日', 'zh-Hant': '最後更新：2026 年 3 月 25 日' },

    'priv.s1.h':  { en: '1. Introduction', 'zh-Hans': '1. 引言', 'zh-Hant': '1. 引言' },
    'priv.s1.p':  { en: '1.1 This Privacy Policy explains how we collect, use, and protect your personal information.', 'zh-Hans': '1.1 本隐私政策旨在说明我们如何收集、使用和保护您的个人信息。', 'zh-Hant': '1.1 本隱私政策旨在說明我們如何收集、使用和保護您的個人資訊。' },

    'priv.s2.h':  { en: '2. Information We Collect', 'zh-Hans': '2. 我们收集的信息', 'zh-Hant': '2. 我們收集的資訊' },
    'priv.s2.p1': { en: '2.1 Information you provide: username, nickname, and other information submitted during account registration.', 'zh-Hans': '2.1 您提供的信息：注册账户时提交的用户名、昵称等。', 'zh-Hant': '2.1 您提供的資訊：註冊帳戶時提交的用戶名、暱稱等。' },
    'priv.s2.p2': { en: '2.2 Automatically collected information: device information, log data, IP address, etc.', 'zh-Hans': '2.2 自动收集的信息：设备信息、日志数据、IP 地址等。', 'zh-Hant': '2.2 自動收集的資訊：裝置資訊、日誌數據、IP 地址等。' },

    'priv.s3.h':  { en: '3. How We Use Information', 'zh-Hans': '3. 我们如何使用信息', 'zh-Hant': '3. 我們如何使用資訊' },
    'priv.s3.p1': { en: '3.1 To provide, maintain, and improve the functionality of this application.', 'zh-Hans': '3.1 提供、维护和改进本应用的功能。', 'zh-Hant': '3.1 提供、維護和改進本應用的功能。' },
    'priv.s3.p2': { en: '3.2 To ensure user safety and prevent fraud and abuse.', 'zh-Hans': '3.2 保障用户安全，防止欺诈和滥用行为。', 'zh-Hant': '3.2 保障用戶安全，防止欺詐和濫用行為。' },
    'priv.s3.p3': { en: '3.3 To comply with applicable laws and regulations.', 'zh-Hans': '3.3 遵守法律法规要求。', 'zh-Hant': '3.3 遵守法律法規要求。' },

    'priv.s4.h':  { en: '4. Information Sharing & Disclosure', 'zh-Hans': '4. 信息共享与披露', 'zh-Hant': '4. 資訊共享與披露' },
    'priv.s4.p0': { en: 'We will not sell your personal information, but may share it in the following circumstances:', 'zh-Hans': '我们不会出售您的个人信息，但可能在以下情况下共享：', 'zh-Hant': '我們不會出售您的個人資訊，但可能在以下情況下共享：' },
    'priv.s4.p1': { en: '4.1 When required by law or by government authorities.', 'zh-Hans': '4.1 法律要求或政府机构要求时。', 'zh-Hant': '4.1 法律要求或政府機構要求時。' },
    'priv.s4.p2': { en: '4.2 To protect our legitimate interests or prevent fraud.', 'zh-Hans': '4.2 保护我们的合法权益或防止欺诈行为时。', 'zh-Hant': '4.2 保護我們的合法權益或防止欺詐行為時。' },

    'priv.s5.h':  { en: '5. Information Storage & Security', 'zh-Hans': '5. 信息存储与安全', 'zh-Hant': '5. 資訊儲存與安全' },
    'priv.s5.p1': { en: '5.1 We take reasonable technical measures to protect your information.', 'zh-Hans': '5.1 我们采取合理的技术措施保护您的信息。', 'zh-Hant': '5.1 我們採取合理的技術措施保護您的資訊。' },
    'priv.s5.p2': { en: '5.2 Please note that no online service can guarantee 100% security.', 'zh-Hans': '5.2 请注意，任何在线服务都无法保证 100% 安全。', 'zh-Hant': '5.2 請注意，任何線上服務都無法保證 100% 安全。' },

    'priv.s6.h':  { en: '6. Your Rights', 'zh-Hans': '6. 您的权利', 'zh-Hant': '6. 您的權利' },
    'priv.s6.p':  { en: '6.1 You have the right to access, correct, or delete your personal information.', 'zh-Hans': '6.1 访问、更正或删除您的个人信息。', 'zh-Hant': '6.1 存取、更正或刪除您的個人資訊。' },

    'priv.s7.h':  { en: '7. Changes to This Policy', 'zh-Hans': '7. 本政策的变更', 'zh-Hant': '7. 本政策的變更' },
    'priv.s7.p':  { en: '7.1 We may update this Privacy Policy. Updated versions will be published in the application or on the website.', 'zh-Hans': '7.1 我们可能会更新本隐私政策，变更后的版本将在本应用或网站上发布。', 'zh-Hant': '7.1 我們可能會更新本隱私政策，變更後的版本將在本應用或網站上發布。' },

    'priv.s8.h':  { en: '8. Contact Us', 'zh-Hans': '8. 联系我们', 'zh-Hant': '8. 聯繫我們' },
    'priv.s8.p':  { en: '8.1 If you have any questions about this policy, please contact us at <a href="mailto:pchat2026@gmail.com">pchat2026@gmail.com</a>.', 'zh-Hans': '8.1 如果您对本政策有任何疑问，请通过 <a href="mailto:pchat2026@gmail.com">pchat2026@gmail.com</a> 与我们联系。', 'zh-Hant': '8.1 如果您對本政策有任何疑問，請透過 <a href="mailto:pchat2026@gmail.com">pchat2026@gmail.com</a> 與我們聯繫。' },

    /* ────── faq.html ────── */
    'faq.title':   { en: 'FAQ \u2014 PChat', 'zh-Hans': '常见问题 \u2014 PChat', 'zh-Hant': '常見問題 \u2014 PChat' },
    'faq.h1':      { en: 'Frequently Asked Questions', 'zh-Hans': '常见问题', 'zh-Hant': '常見問題' },

    'faq.g1.h':    { en: 'General', 'zh-Hans': '一般问题', 'zh-Hant': '一般問題' },
    'faq.g1.q1':   { en: 'What is PChat?', 'zh-Hans': '什么是 PChat？', 'zh-Hant': '什麼是 PChat？' },
    'faq.g1.a1':   { en: 'PChat is a fast, secure messaging app built for local city communities. It lets you discover people nearby, join neighborhood groups, and communicate with end-to-end encryption.', 'zh-Hans': 'PChat 是一款为本地城市社区打造的快速、安全的即时通讯应用。它让你发现附近的人，加入社区群组，并使用端到端加密进行沟通。', 'zh-Hant': 'PChat 是一款為本地城市社區打造的快速、安全的即時通訊應用。它讓你發現附近的人，加入社區群組，並使用端到端加密進行溝通。' },
    'faq.g1.q2':   { en: 'Is PChat free?', 'zh-Hans': 'PChat 是免费的吗？', 'zh-Hant': 'PChat 是免費的嗎？' },
    'faq.g1.a2':   { en: 'Yes! PChat is completely free to download and use. There are no subscription fees or hidden charges.', 'zh-Hans': '是的！PChat 完全免费下载和使用。没有订阅费或隐藏收费。', 'zh-Hant': '是的！PChat 完全免費下載和使用。沒有訂閱費或隱藏收費。' },
    'faq.g1.q3':   { en: 'Which platforms is PChat available on?', 'zh-Hans': 'PChat 支持哪些平台？', 'zh-Hant': 'PChat 支援哪些平台？' },
    'faq.g1.a3':   { en: 'PChat is currently available for iOS on the App Store. We are working on expanding to more platforms in the future.', 'zh-Hans': 'PChat 目前在 App Store 上提供 iOS 版本。我们正在努力将来扩展到更多平台。', 'zh-Hant': 'PChat 目前在 App Store 上提供 iOS 版本。我們正在努力將來擴展到更多平台。' },

    'faq.g2.h':    { en: 'Account', 'zh-Hans': '账户', 'zh-Hant': '帳戶' },
    'faq.g2.q1':   { en: 'How do I create an account?', 'zh-Hans': '如何创建账户？', 'zh-Hant': '如何建立帳戶？' },
    'faq.g2.a1':   { en: 'Download PChat from the App Store, open the app, and follow the registration steps. You can sign up with your phone number or username.', 'zh-Hans': '从 App Store 下载 PChat，打开应用，按照注册步骤操作。你可以使用手机号或用户名注册。', 'zh-Hant': '從 App Store 下載 PChat，開啟應用，按照註冊步驟操作。你可以使用手機號或用戶名註冊。' },
    'faq.g2.q2':   { en: 'Can I change my username?', 'zh-Hans': '可以更改用户名吗？', 'zh-Hant': '可以更改用戶名嗎？' },
    'faq.g2.a2':   { en: 'Yes! Go to Settings > Edit Profile to change your username, display name, and profile photo at any time.', 'zh-Hans': '可以！前往设置 > 编辑个人资料，随时更改你的用户名、显示名称和头像。', 'zh-Hant': '可以！前往設定 > 編輯個人資料，隨時更改你的用戶名、顯示名稱和頭像。' },
    'faq.g2.q3':   { en: 'How do I delete my account?', 'zh-Hans': '如何删除账户？', 'zh-Hant': '如何刪除帳戶？' },
    'faq.g2.a3':   { en: 'Go to Settings > Privacy and Security > Delete My Account. Please note that this action is irreversible and all your data will be permanently removed.', 'zh-Hans': '前往设置 > 隐私和安全 > 删除我的账户。请注意此操作不可逆，你的所有数据将被永久删除。', 'zh-Hant': '前往設定 > 隱私和安全 > 刪除我的帳戶。請注意此操作不可逆，你的所有資料將被永久刪除。' },

    'faq.g3.h':    { en: 'Secret Chats', 'zh-Hans': '私密聊天', 'zh-Hant': '私密聊天' },
    'faq.g3.q1':   { en: 'What are Secret Chats?', 'zh-Hans': '什么是私密聊天？', 'zh-Hant': '什麼是私密聊天？' },
    'faq.g3.a1':   { en: 'Secret Chats provide end-to-end encryption, meaning only you and the recipient can read the messages. They also support self-destructing messages with customizable timers.', 'zh-Hans': '私密聊天提供端到端加密，这意味着只有你和接收者可以阅读消息。它还支持自定义计时器的阅后即焚消息。', 'zh-Hant': '私密聊天提供端到端加密，這意味著只有你和接收者可以閱讀訊息。它還支援自訂計時器的閱後即焚訊息。' },
    'faq.g3.q2':   { en: 'How do I start a Secret Chat?', 'zh-Hans': '如何开始私密聊天？', 'zh-Hant': '如何開始私密聊天？' },
    'faq.g3.a2':   { en: 'Open a contact\u2019s profile page and tap "Start Secret Chat". The chat will be device-specific and won\u2019t appear on your other devices.', 'zh-Hans': '打开联系人的个人资料页，点击"发起私密聊天"。聊天将绑定到当前设备，不会出现在你的其他设备上。', 'zh-Hant': '開啟聯絡人的個人資料頁，點擊「發起私密聊天」。聊天將綁定到當前裝置，不會出現在你的其他裝置上。' },
    'faq.g3.q3':   { en: 'Can Secret Chat messages be forwarded?', 'zh-Hans': '私密聊天的消息可以转发吗？', 'zh-Hant': '私密聊天的訊息可以轉發嗎？' },
    'faq.g3.a3':   { en: 'No. Messages in Secret Chats cannot be forwarded. Screenshots are also restricted on supported devices.', 'zh-Hans': '不可以。私密聊天中的消息不能被转发。在支持的设备上也会限制截图。', 'zh-Hant': '不可以。私密聊天中的訊息不能被轉發。在支援的裝置上也會限制截圖。' },

    'faq.g4.h':    { en: 'Groups & Communities', 'zh-Hans': '群组与社区', 'zh-Hant': '群組與社區' },
    'faq.g4.q1':   { en: 'What\u2019s the maximum group size?', 'zh-Hans': '群组最大人数是多少？', 'zh-Hant': '群組最大人數是多少？' },
    'faq.g4.a1':   { en: 'PChat groups can hold up to 200,000 members. For large communities, you can also create channels to broadcast messages.', 'zh-Hans': 'PChat 群组最多可容纳 200,000 名成员。对于大型社区，你还可以创建频道来广播消息。', 'zh-Hant': 'PChat 群組最多可容納 200,000 名成員。對於大型社區，你還可以建立頻道來廣播訊息。' },
    'faq.g4.q2':   { en: 'How do I find local groups?', 'zh-Hans': '如何找到本地群组？', 'zh-Hant': '如何找到本地群組？' },
    'faq.g4.a2':   { en: 'Use the "People Nearby" feature to discover groups and users in your area. You can also search for groups directly by name or topic.', 'zh-Hans': '使用"附近的人"功能来发现你所在区域的群组和用户。你也可以通过名称或话题直接搜索群组。', 'zh-Hant': '使用「附近的人」功能來發現你所在區域的群組和用戶。你也可以透過名稱或話題直接搜尋群組。' },
    'faq.g4.q3':   { en: 'Can I create a private group?', 'zh-Hans': '可以创建私有群组吗？', 'zh-Hant': '可以建立私有群組嗎？' },
    'faq.g4.a3':   { en: 'Yes! You can create both public and private groups. Private groups are invite-only and won\u2019t appear in search results.', 'zh-Hans': '可以！你可以创建公开和私有群组。私有群组仅限邀请加入，不会出现在搜索结果中。', 'zh-Hant': '可以！你可以建立公開和私有群組。私有群組僅限邀請加入，不會出現在搜尋結果中。' },

    'faq.g5.h':    { en: 'Privacy & Security', 'zh-Hans': '隐私与安全', 'zh-Hant': '隱私與安全' },
    'faq.g5.q1':   { en: 'Is my data sold to advertisers?', 'zh-Hans': '我的数据会被卖给广告商吗？', 'zh-Hant': '我的資料會被賣給廣告商嗎？' },
    'faq.g5.a1':   { en: 'Absolutely not. PChat does not sell, share, or monetize your personal data or message content. Your privacy is our priority.', 'zh-Hans': '绝对不会。PChat 不会出售、共享或利用你的个人数据或消息内容进行盈利。你的隐私是我们的首要任务。', 'zh-Hant': '絕對不會。PChat 不會出售、共享或利用你的個人資料或訊息內容進行盈利。你的隱私是我們的首要任務。' },
    'faq.g5.q2':   { en: 'How can I block someone?', 'zh-Hans': '如何拉黑某人？', 'zh-Hant': '如何封鎖某人？' },
    'faq.g5.a2':   { en: 'Open the user\u2019s profile page and tap "Block User". Blocked users cannot send you messages or see your last-seen status.', 'zh-Hans': '打开用户的个人资料页，点击"拉黑用户"。被拉黑的用户无法给你发送消息或查看你的在线状态。', 'zh-Hant': '開啟用戶的個人資料頁，點擊「封鎖用戶」。被封鎖的用戶無法傳送訊息給你或查看你的線上狀態。' },
    'faq.g5.q3':   { en: 'How do I report inappropriate content?', 'zh-Hans': '如何举报不当内容？', 'zh-Hant': '如何檢舉不當內容？' },
    'faq.g5.a3':   { en: 'Long-press on a message or open a user/group profile and tap "Report". Our moderation team will review all reports promptly.', 'zh-Hans': '长按消息或打开用户/群组资料页，点击"举报"。我们的审核团队会及时审核所有举报。', 'zh-Hant': '長按訊息或開啟用戶/群組資料頁，點擊「檢舉」。我們的審核團隊會及時審核所有檢舉。' },

    'faq.contact.h': { en: 'Still Have Questions?', 'zh-Hans': '还有其他问题？', 'zh-Hant': '還有其他問題？' },
    'faq.contact.p': { en: 'Reach out to us at <a href="mailto:pchat2026@gmail.com">pchat2026@gmail.com</a> and we\u2019ll be happy to help.', 'zh-Hans': '请通过 <a href="mailto:pchat2026@gmail.com">pchat2026@gmail.com</a> 联系我们，我们很乐意帮助你。', 'zh-Hant': '請透過 <a href="mailto:pchat2026@gmail.com">pchat2026@gmail.com</a> 聯繫我們，我們很樂意幫助你。' }
  };

  /* ── Detect language ── */
  var SUPPORTED = ['en', 'zh-Hans', 'zh-Hant'];

  function detectLang() {
    var stored = localStorage.getItem('pchat-lang');
    if (stored && SUPPORTED.indexOf(stored) !== -1) return stored;
    var nav = (navigator.language || navigator.userLanguage || 'en').toLowerCase();
    if (nav.indexOf('zh') === 0) {
      if (nav.indexOf('tw') !== -1 || nav.indexOf('hk') !== -1 || nav.indexOf('hant') !== -1) return 'zh-Hant';
      return 'zh-Hans';
    }
    return 'en';
  }

  /* ── Apply translations ── */
  function applyLang(lang) {
    localStorage.setItem('pchat-lang', lang);
    document.documentElement.lang = lang === 'zh-Hans' ? 'zh-CN' : lang === 'zh-Hant' ? 'zh-TW' : 'en';

    var els = document.querySelectorAll('[data-i18n]');
    for (var i = 0; i < els.length; i++) {
      var key = els[i].getAttribute('data-i18n');
      var entry = T[key];
      if (!entry) continue;
      var text = entry[lang] || entry['en'];
      if (els[i].tagName === 'TITLE') {
        document.title = text;
      } else {
        els[i].innerHTML = text;
      }
    }

    /* Update switcher display */
    var btn = document.getElementById('lang-btn');
    if (btn) {
      var labels = { en: 'EN', 'zh-Hans': '简', 'zh-Hant': '繁' };
      btn.textContent = labels[lang] || 'EN';
    }
  }

  /* ── Build language switcher ── */
  function buildSwitcher() {
    var nav = document.querySelector('nav');
    if (!nav) return;

    var wrap = document.createElement('div');
    wrap.className = 'lang-switcher';

    var btn = document.createElement('button');
    btn.id = 'lang-btn';
    btn.className = 'lang-btn';
    btn.setAttribute('aria-label', 'Switch language');

    var menu = document.createElement('div');
    menu.className = 'lang-menu';

    var items = [
      { code: 'en', label: 'English' },
      { code: 'zh-Hans', label: '简体中文' },
      { code: 'zh-Hant', label: '繁體中文' }
    ];

    for (var i = 0; i < items.length; i++) {
      var a = document.createElement('a');
      a.href = '#';
      a.setAttribute('data-lang', items[i].code);
      a.textContent = items[i].label;
      a.addEventListener('click', (function (code) {
        return function (e) {
          e.preventDefault();
          applyLang(code);
          menu.classList.remove('show');
        };
      })(items[i].code));
      menu.appendChild(a);
    }

    btn.addEventListener('click', function (e) {
      e.stopPropagation();
      menu.classList.toggle('show');
    });
    document.addEventListener('click', function () { menu.classList.remove('show'); });

    wrap.appendChild(btn);
    wrap.appendChild(menu);
    nav.appendChild(wrap);
  }

  /* ── Init ── */
  document.addEventListener('DOMContentLoaded', function () {
    buildSwitcher();
    applyLang(detectLang());
  });
})();
