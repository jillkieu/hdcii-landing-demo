const form = document.querySelector("#lead-form");

form?.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(form);
  const name = data.get("name") || "Anh/chị";
  alert(`${name}, yêu cầu tư vấn đã được ghi nhận trong bản demo.`);
  form.reset();
});
