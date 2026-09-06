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
   ============================================================ */

(function () {
  'use strict';

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

        var verdict = i === answer ? 'Correct. ' : 'Not quite. ';
        fb.innerHTML = '<strong>' + verdict + '</strong>' + (opt.getAttribute('data-fb') || '');

        // On a miss, also surface why the real answer is right.
        if (i !== answer) {
          var right = opts[answer].getAttribute('data-fb');
          if (right) fb.innerHTML += '<br><br><strong>The answer: </strong>' + right;
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
        btn.textContent = 'Try writing something first — then click again';
        return;
      }
      model.hidden = false;
      btn.disabled = true;
      btn.textContent = 'Model answer shown';
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.quiz[data-answer]').forEach(initQuiz);
    document.querySelectorAll('.recall').forEach(initRecall);
  });
})();
