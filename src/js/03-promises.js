
import Notiflix from "notiflix";

const form = document.querySelector('.form')

console.log(form)

form.addEventListener(`submit`, onFormSubmit);
function onFormSubmit(event) {
    event.preventDefault();

    const formElements = event.currentTarget.elements;
    let firstDelay = Number(formElements.delay.value);
    const delayStep = Number(formElements.step.value);
    const amount = Number(formElements.amount.value);

    for ( let position = 1; position <= amount; position += 1) {
        createPromise(position, firstDelay);
        firstDelay += delayStep;
    };
   
}

function createPromise(position, delay) {
    const promise = new Promise((resolve, reject) => {
      const shouldResolve = Math.random() > 0.3;
  
      setTimeout(() => {
        if (shouldResolve) {
          resolve({ position, delay });
        } else {
          reject({ position, delay });
        }
      }, delay);
    });

    promise.then(({ position, delay }) => {
        Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      }).catch(({ position, delay }) => {
        Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
  }