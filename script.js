const showButton = document.getElementById("showButton");
        const hiddenDiv = document.getElementById("hiddenDiv");

        showButton.addEventListener("click", () => {
            if (hiddenDiv.style.display === "none") {
                hiddenDiv.style.display = "block";
            } else {
                hiddenDiv.style.display = "none";
            }
        });

        const nut2 = document.getElementById("nut2");
        const hiddenDiv1 = document.getElementById("hiddenDiv1");

        nut2.addEventListener("click", () => {
            if (hiddenDiv1.style.display === "none") {
                hiddenDiv1.style.display = "block"; 
            } else {
                hiddenDiv1.style.display = "none"; 
            }
        });

        const nut3 = document.getElementById("nut3");
        const hiddenDiv2 = document.getElementById("hiddenDiv2");

        nut3.addEventListener("click", () => {
            if (hiddenDiv2.style.display === "none") {
                hiddenDiv2.style.display = "block"; 
            } else {
                hiddenDiv2.style.display = "none"; 
            }
        });

        const nut4 = document.getElementById("nut4");
        const hiddenDiv3 = document.getElementById("hiddenDiv3");

        nut4.addEventListener("click", () => {
            if (hiddenDiv3.style.display === "none") {
                hiddenDiv3.style.display = "block"; 
            } else {
                hiddenDiv3.style.display = "none"; 
            }
        });

        const nut5 = document.getElementById("nut5");
        const hiddenDiv4 = document.getElementById("hiddenDiv4");

        nut5.addEventListener("click", () => {
            if (hiddenDiv4.style.display === "none") {
                hiddenDiv4.style.display = "block"; 
            } else {
                hiddenDiv4.style.display = "none"; 
            }
        });

        let count1 = localStorage.getItem("count1") || 0;
        const countDisplay1 = document.getElementById("count1");
        countDisplay1.textContent = count1;

        let count2 = localStorage.getItem("count2") || 0;
        const countDisplay2 = document.getElementById("count2");
        countDisplay2.textContent = count2;

        let count3 = localStorage.getItem("count3") || 0;
        const countDisplay3 = document.getElementById("count3");
        countDisplay3.textContent = count3;

        let count4 = localStorage.getItem("count4") || 0;
        const countDisplay4 = document.getElementById("count4");
        countDisplay4.textContent = count4;

        let count5 = localStorage.getItem("count5") || 0;
        const countDisplay5 = document.getElementById("count5");
        countDisplay5.textContent = count5;

        const heartIcon1 = document.getElementById("heart-icon1");
        const heartIcon2 = document.getElementById("heart-icon2");
        const heartIcon3 = document.getElementById("heart-icon3");
        const heartIcon4 = document.getElementById("heart-icon4");
        const heartIcon5 = document.getElementById("heart-icon5");

        heartIcon1.addEventListener("click", function () {
            count1++;
            countDisplay1.textContent = count1;
            localStorage.setItem("count1", count1);
        });

        heartIcon2.addEventListener("click", function () {
            count2++;
            countDisplay2.textContent = count2;
            localStorage.setItem("count2", count2);
        });

        heartIcon3.addEventListener("click", function () {
            count3++;
            countDisplay3.textContent = count3;
            localStorage.setItem("count3", count3);
        });

        heartIcon4.addEventListener("click", function () {
            count4++;
            countDisplay4.textContent = count4;
            localStorage.setItem("count4", count4);
        });

        heartIcon5.addEventListener("click", function () {
            count5++;
            countDisplay5.textContent = count5;
            localStorage.setItem("count3", count5);
        });
