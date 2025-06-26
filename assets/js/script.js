document.addEventListener('DOMContentLoaded', () => {
    // サブメニューを開閉するための '>' ボタンをすべて取得
    const submenuToggles = document.querySelectorAll('.submenu-toggle');

    submenuToggles.forEach(toggle => {
        toggle.addEventListener('click', (event) => {
            // イベントの伝播を停止（親要素のリンクが反応しないように）
            event.stopPropagation();
            
            // クリックされた '>' の親の <li> 要素を取得
            const parentLi = toggle.closest('.has-submenu');
            
            // 'open' クラスを付けたり外したりして、表示/非表示を切り替える
            if (parentLi) {
                parentLi.classList.toggle('open');
            }
        });
    });
});
