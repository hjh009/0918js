function testShuffle(c, trials = 100000) {
  let countFront = 0;
  let countBack = 0;

  for (let i = 0; i < trials; i++) {
    let result = Math.random() - c;
    if (result < 0) countFront++;
    else countBack++;
  }

  console.log(`c = ${c}`);
  console.log(
    `앞으로 보내는 확률: ${((countFront / trials) * 100).toFixed(2)}%`
  );
  console.log(`뒤로 보내는 확률: ${((countBack / trials) * 100).toFixed(2)}%`);
  console.log("-----");
}

// 여러 기준값으로 비교
testShuffle(0); // 항상 뒤로
testShuffle(0.2); // 20:80
testShuffle(0.5); // 50:50 (진짜 랜덤 비슷)
testShuffle(0.8); // 80:20
testShuffle(1); // 항상 앞으로
