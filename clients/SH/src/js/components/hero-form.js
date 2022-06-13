const el = ("#hero-form-select");
const heroForm = document.querySelector('.hero-form');
const hiddenIdsField = document.querySelector("#array-ids");
const apiURL = "https://www.stockhawk.io/api/instruments";

const select = new TomSelect(el,{
  valueField: 'instrumentId',
  labelField: 'symbol',
  searchField: ['symbol', 'name'],
  sortField: [
    { field: 'symbol', direction: 'asc'},
    { field: 'name', direction: 'asc'}
  ],
  plugins: ['remove_button'],
	persist: false,
  maxItems: null,
  onInitialize:() => {
    heroForm.classList.remove('before-initialize');
	},
  onChange:(e) => {
    hiddenIdsField.setAttribute('value', e.join(','));
    select.close();
	},
  load: (query, callback) => {
    const url = `${apiURL}/${encodeURIComponent(query)}`;
    fetch(url)
      .then(response => response.json())
      .then(json => {
        callback(json);
      }).catch(()=>{
        callback();
      });

  },
  render: {
    option: (item, escape) => {
      return `
        <div class="flex items-center">
          ${item.symbol && `<div class="bg-[red]" style="margin-right: 20px;">${escape(item.symbol)}</div>`}
          <div>${escape(item.name)}</div> 
        </div>`;
    },
    item: (item, escape) => {
      return `<div>${escape(item.symbol)}</div>`;
    }
  },
});

heroForm.addEventListener("submit", (event) => {
  event.preventDefault();
});
