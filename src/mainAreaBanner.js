export function initializeBanner() {
    var index = 0;
    var itemList = document.querySelectorAll(".banner .item");
    var pagenationList = document.querySelectorAll(".banner .pagenation>div");

    itemList[0].style.opacity = 1;
    pagenationList[0].style.background = "blue";

    function nextFn() {
        index = index >= itemList.length - 1 ? 0 : ++index;
        showImage();
    }

    function prevFn() {
        index = index <= 0 ? itemList.length - 1 : --index;
        showImage();
    }

    function showImage() {
        for (var i = 0; i < itemList.length; i++) {
            itemList[i].style.opacity = 0;
            pagenationList[i].style.background = "white";
        }
        itemList[index].style.transition = "opacity 1s ease .2s";
        itemList[index].style.opacity = 1;
        pagenationList[index].style.background = "blue";
    }

    document.querySelector(".banner .div2").addEventListener("click", nextFn);
    document.querySelector(".banner .div1").addEventListener("click", prevFn);

    var t1 = setInterval(nextFn, 2000);

    var banner = document.querySelector(".banner");
    banner.addEventListener("mouseover", function () {
        clearInterval(t1);
    });

    banner.addEventListener("mouseout", function () {
        t1 = setInterval(nextFn, 2000);
    });

    document.querySelector(".banner .pagenation").addEventListener("click", function (event) {
        var clickedIndex = Array.from(pagenationList).indexOf(event.target);
        if (clickedIndex !== -1) {
            index = clickedIndex;
            showImage();
        }
    });
}

