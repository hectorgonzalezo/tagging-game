import BASEURL from './baseurl';

export async function getScores() {
  const response = await fetch(`${BASEURL}/scores`, {
    method: 'GET',
    mode: 'cors',
  });
  const scores = await response.json();
  return scores.scores;
}

export async function submitUserScore(name, score) {
  const response = await fetch(`${BASEURL}/scores`, {
    method: "POST",
    mode: 'cors',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, score }),
  });
  console.log({response})
  const newScore = response.json();
  return newScore
}