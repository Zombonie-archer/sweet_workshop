export function showLoader() {
  const loader = document.querySelector('.global-loader-overlay');
  loader.classList.remove('hidden');
}

export function hideLoader() {
  const loader = document.querySelector('.global-loader-overlay');
  loader.classList.add('hidden');
}