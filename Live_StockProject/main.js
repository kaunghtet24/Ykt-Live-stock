document.getElementById('btn1').addEventListener('click', function () {
  window.open('https://docs.google.com/spreadsheets/d/1H40vKEkIepDmbEdGXf2jMg-vUMNsOE7_NXVgNhAtBBg/edit?usp=sharing', '_blank');
});

document.getElementById('btn2').addEventListener('click', function () {
  window.open('https://docs.google.com/spreadsheets/d/1SWMxTyh7Zi_k_1jPFofG5E3om-Ecrz_XaBGdRJMDf2Q/edit?usp=sharing', '_blank');
});

document.getElementById('btn3').addEventListener('click', function () {
  window.open('https://docs.google.com/spreadsheets/d/10_mU3ka2XGhvVdxseHe-McpOkww5vQh_4272q5TUAkg/edit?usp=sharing', '_blank');
});

document.getElementById('btn4').addEventListener('click', function () {
  window.open('https://docs.google.com/spreadsheets/d/15vpKy2j3r0uO5_BEZWsCHVPSxxQRmYdFB3T-x0vYroY/edit?usp=sharing', '_blank');
});

document.getElementById('btn5').addEventListener('click', function () {
  window.open('https://docs.google.com/spreadsheets/d/1dT26XwCeebj_urbKvbgRrzpHY7GlTk4wtBizRbE0kI8/edit?usp=sharing', '_blank');
});

document.getElementById('btn6').addEventListener('click', function () {
  window.open('https://docs.google.com/spreadsheets/d/1CF7AOpUPjvCXXKI91F4mVKSji3p_uDNuEWiyFr0qfQg/edit?usp=sharing', '_blank');
});

document.getElementById('btn7').addEventListener('click', function () {
  window.open('https://docs.google.com/spreadsheets/d/1m-42XmLUqJzPloICkrN4JQ8_ZMXiQVCfpgaTVaMnvrI/edit?usp=sharing', '_blank');
});

document.getElementById('btn8').addEventListener('click', function () {
  window.open('https://docs.google.com/spreadsheets/d/1ZtdR5zZjnBvOhVj2R_0ZEfDzrd9uBmY1o5njIyh4wm0/edit?usp=sharing', '_blank');
});

document.getElementById('btn9').addEventListener('click', function () {
  window.open('https://docs.google.com/spreadsheets/d/1xvT7CkRKgCzGxfQF1jQ4nqdg7w5vYRNVoFjghSgsCs8/edit?usp=sharing', '_blank');
});

document.getElementById('btn10').addEventListener('click', function () {
  window.open('https://docs.google.com/spreadsheets/d/13M6VEfhUB6orlGw2q3xLvZaCpf1AqzBqnqmocMfhQ2Q/edit?usp=sharing', '_blank');
});

document.getElementById('btn11').addEventListener('click', function () {
  window.open('https://docs.google.com/spreadsheets/d/1wLpXWEOuQueIbGRpXhCXf1afb5SXuuLEHdIfDy02gUE/edit?usp=sharing', '_blank');
});

document.getElementById('btn12').addEventListener('click', function () {
  window.open('https://docs.google.com/spreadsheets/d/1coHxcyK_-Tejhv5VJS1DWCHPsgDz75MJ-YCBpFdSaHs/edit?usp=sharing', '_blank');
});

document.getElementById('btn13').addEventListener('click', function () {
  window.open('https://docs.google.com/spreadsheets/d/example_apple', '_blank');
});

document.getElementById('btn14').addEventListener('click', function () {
  window.open('https://docs.google.com/spreadsheets/d/example_samsung', '_blank');
});

document.getElementById('btn15').addEventListener('click', function () {
  const mascot = document.getElementById('mascot');
  
  // Show the mascot and trigger the animation
  mascot.style.display = 'block';
  setTimeout(() => {
    mascot.classList.add('flyout');
  }, 100); // Small delay for smooth animation start

  // Remove the animation and hide the mascot after it ends
  setTimeout(() => {
    mascot.style.display = 'none';
    mascot.classList.remove('flyout');
  }, 3500); // Matches the animation duration (2.5s transform + 1s buffer)
});




// Repeat for other buttons

document.getElementById('logo').addEventListener('click', function () {
  startSnowfall();
});

function startSnowfall() {
  const numSnowflakes = 50; // Number of snowflakes to appear
  const container = document.body;

  for (let i = 0; i < numSnowflakes; i++) {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    snowflake.textContent = '❄'; // Snowflake character

    // Random position for each snowflake
    snowflake.style.left = `${Math.random() * 100}vw`; // Random horizontal position
    snowflake.style.animationDuration = `${Math.random() * 5 + 5}s`; // Random falling speed

    container.appendChild(snowflake);

    // Remove snowflakes after animation ends
    setTimeout(() => {
      snowflake.remove();
    }, 10000); // Same as the animation duration
  }
}


