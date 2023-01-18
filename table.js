function lifeProcess () {
    let j = 0;

    let lif = "";
    let ach = [];
    let cha = [];

    for(i = 0; i < 4; i++) {
        
         a = one(userInfo()[0]);
         b = one(userInfo()[1]);
         c = one(userInfo()[2]);


        switch (i) {
            case 0:
                // 첫번째
                j += 36 - lifeColor();
                lif = 0 + " ~ " + j + " 세";

                // 두번째 성취컬러 : 월 + 일
                ach.push(oneTable(c + b));
                // 세번째 도전컬러 : 월 - 일
                cha.push(one(c - b));
                break;
            case 1:
                // 첫번째
                j += 1;
                lif = j + " ~ " + (j + 8) + " 세";

                // 두번째 성취컬러 : 일 + 년
                ach.push(oneTable(c + a));
                // 세번째 도전컬러 : 일 - 년
                cha.push(one(c - a));
                break;
            case 2:
                // 첫번째
                j += 9;
                lif = j + " ~ " + (j + 8) + " 세";

                // 두번째 성취컬러 : 성취 첫번째 + 성취 두번쨰
                ach.push(oneTable(ach[0] + ach[1]));
                // 세번째 도전컬러 : 도전 첫번째 - 도전 두번째
                cha.push(one(cha[0] - cha[1]));
                break;
            case 3:
                // 첫번째
                j += 9;
                lif = j + " 세" + " ~ ";

                // 두번째 성취컬러 : 월 + 년
                ach.push(oneTable(b + a));
                // 세번째 도전컬러 : 월 - 년
                cha.push(one(b - a));
                break;
        }
        document.getElementById("life_day" + i).innerText = lif;
        if (ach[i] == 11) {
            document.getElementById("ach_day" + i).innerText = "11(2)";
        } else if (ach[i] == 22) { 
            document.getElementById("ach_day" + i).innerText = "22(4)";
        } else {
            document.getElementById("ach_day" + i).innerText = ach[i];
        }
        document.getElementById("cha_day" + i).innerText = cha[i];
    }
}