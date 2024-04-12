import FormData from '@/components/forms/contact-form';

export function sendEmail(data: FormData) {
  const apiEndpoint = '/api/send';

  fetch(apiEndpoint, {
    method: 'POST',
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((response) => {
      alert(response.message);
    })
    .catch((err) => {
      alert(err);
    });
}