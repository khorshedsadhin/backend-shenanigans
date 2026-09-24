/* ============================================================
   Shared interactive components for course lessons.
   Link with: <script src="../assets/quiz.js" defer></script>

   MARKUP CONTRACT
   ---------------
   Multiple choice — feedback is immediate, per-option:
     <div class="quiz" data-answer="2">
       <div class="qnum">Check 1</div>
       <p class="qtext">Question?</p>
       <button class="opt" data-fb="Why this is wrong.">Option one</button>
       <button class="opt" data-fb="Why this is wrong.">Option two</button>
       <button class="opt" data-fb="Why this is right.">Option three</button>
     </div>
   data-answer is the ZERO-BASED index of the correct button.

   Free recall — forces retrieval before revealing:
     <div class="recall">
       <p class="qtext">Write from memory: ...</p>
       <textarea></textarea>
       <button>Reveal model answer</button>
       <div class="model" hidden>...</div>
     </div>

   UI text follows <html lang>: "bn" gives Bangla, anything else English.
   ============================================================ */

(function () {
  'use strict';

  var STRINGS = {
    en: {
      correct: 'Correct. ',
      wrong: 'Not quite. ',
      answer: 'The answer: ',
      tryFirst: 'Try writing something first — then click again',
      shown: 'Model answer shown'
    },
    bn: {
      correct: 'ঠিক। ',
      wrong: 'হয়নি। ',
      answer: 'সঠিক উত্তর: ',
      tryFirst: 'আগে কিছু লেখো — তারপর আবার ক্লিক করো',
      shown: 'Model answer দেখানো হলো'
    }
  };
  var T = STRINGS[document.documentElement.lang] || STRINGS.en;

  function initQuiz(quiz) {
    var answer = parseInt(quiz.getAttribute('data-answer'), 10);
    var opts = Array.prototype.slice.call(quiz.querySelectorAll('.opt'));
    var fb = document.createElement('div');
    fb.className = 'fb';
    fb.hidden = true;
    quiz.appendChild(fb);

    opts.forEach(function (opt, i) {
      opt.addEventListener('click', function () {
        if (quiz.dataset.done) return;
        quiz.dataset.done = '1';

        opts.forEach(function (o, j) {
          o.disabled = true;
          if (j === answer) o.classList.add('correct');
        });
        if (i !== answer) opt.classList.add('wrong');

        var verdict = i === answer ? T.correct : T.wrong;
        fb.innerHTML = '<strong>' + verdict + '</strong>' + (opt.getAttribute('data-fb') || '');

        // On a miss, also surface why the real answer is right.
        if (i !== answer) {
          var right = opts[answer].getAttribute('data-fb');
          if (right) fb.innerHTML += '<br><br><strong>' + T.answer + '</strong>' + right;
        }
        fb.hidden = false;
      });
    });
  }

  function initRecall(box) {
    var btn = box.querySelector('button');
    var model = box.querySelector('.model');
    var ta = box.querySelector('textarea');
    if (!btn || !model) return;

    btn.addEventListener('click', function () {
      // Desirable difficulty: refuse to reveal until they have actually tried.
      if (ta && ta.value.trim().length < 15 && !box.dataset.nagged) {
        box.dataset.nagged = '1';
        btn.textContent = T.tryFirst;
        return;
      }
      model.hidden = false;
      btn.disabled = true;
      btn.textContent = T.shown;
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.quiz[data-answer]').forEach(initQuiz);
    document.querySelectorAll('.recall').forEach(initRecall);
  });
})();
