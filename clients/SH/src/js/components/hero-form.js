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
  load: function(query, callback) {
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
    option: function(item, escape) {
      return `
        <div class="flex items-center">
          ${item.symbol && `<div style="margin-right: 20px;">${escape(item.symbol)}</div>`}
          <div>${escape(item.name)}</div> 
        </div>`;
    },
    item: function(item, escape) {
      return `<div>${escape(item.symbol)}</div>`;
    }
  },
});

heroForm.addEventListener("submit", function(event) {
  event.preventDefault();
});
