document.addEventListener('DOMContentLoaded', () => {
    // ハンバーガーメニューの要素を取得
    const burger = document.querySelector('.burger');
    // ナビゲーションリンクのリスト要素（モバイル用メニュー）を取得
    const nav = document.querySelector('.nav-links');
    // 各ナビゲーションリンク要素を取得
    const navLinks = document.querySelectorAll('.nav-links li');

    // ハンバーガーメニューがクリックされた時のイベントリスナーを設定
    burger.addEventListener('click', () => {
        // モバイルナビゲーションメニューの表示/非表示を切り替えるクラスをトグル
        // 'translate-x-full' はメニューを右端に隠す (初期状態)
        // 'translate-x-0' はメニューを表示する
        nav.classList.toggle('translate-x-full');
        nav.classList.toggle('translate-x-0');

        // 各ナビゲーションリンクにアニメーションを適用
        navLinks.forEach((link, index) => {
            // もしアニメーションが既に設定されていればリセットし、再度設定できるようにする
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                // アニメーションを設定 (遅延を付けて順番に表示されるようにする)
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });

        // ハンバーガーメニューアイコン自体のアニメーションをトグル
        // これにより、アイコンがXマークに変化するなどの視覚効果が得られる
        burger.classList.toggle('toggle');
    });

    // モバイルナビゲーションが開いているときに、ナビゲーションリンクがクリックされたらメニューを閉じる
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            // ナビゲーションが開いている場合（'translate-x-0'クラスが付いている場合）
            if (nav.classList.contains('translate-x-0')) {
                // メニューを非表示にする
                nav.classList.remove('translate-x-0');
                nav.classList.add('translate-x-full');
                // ハンバーガーアイコンを元の状態に戻す
                burger.classList.remove('toggle');
                // 各リンクのアニメーションをリセット
                navLinks.forEach(link => {
                    link.style.animation = '';
                });
            }
        });
    });
});

