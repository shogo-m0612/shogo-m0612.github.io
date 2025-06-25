// HTMLドキュメントが完全に読み込まれてから実行する
document.addEventListener('DOMContentLoaded', () => {

    // サブメニューを開くためのリンク要素をすべて取得
    const menuToggles = document.querySelectorAll('.menu-toggle');
    // サブメニュー要素をすべて取得
    const submenus = document.querySelectorAll('.submenu');
    // メインコンテンツを取得
    const mainContent = document.querySelector('.main-content');

    // 各リンクにクリックイベントを追加
    menuToggles.forEach(toggle => {
        toggle.addEventListener('click', (event) => {
            // aタグのデフォルトのページ遷移を無効化
            event.preventDefault();

            const targetId = toggle.dataset.target;
            const targetSubmenu = document.getElementById(targetId);

            // クリックされたメニューが既に開いているか
            const isAlreadyOpen = toggle.classList.contains('active');

            // --- 一旦すべてのメニューを閉じる ---
            // すべての親メニューのアクティブ状態を解除
            menuToggles.forEach(t => t.classList.remove('active'));
            // すべてのサブメニューを非表示に
            submenus.forEach(s => s.classList.remove('active'));

            // --- 新しい状態を設定 ---
            if (isAlreadyOpen) {
                // 既に開いていた場合は、閉じたままにする
                // メインコンテンツのmarginを元に戻す
                mainContent.style.marginLeft = '220px';
            } else {
                // 新しく開く場合
                // クリックされた親メニューをアクティブに
                toggle.classList.add('active');
                // 対応するサブメニューを表示
                targetSubmenu.classList.add('active');
                // メインコンテンツをサブメニューの分だけ右にずらす
                mainContent.style.marginLeft = '440px'; // 220px (サイドバー) + 220px (サブメニュー)
            }
        });
    });
});
