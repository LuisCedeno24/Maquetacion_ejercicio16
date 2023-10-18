class FilterProducts {
    constructor() 
    {
        this.products = []; // Aquí cargarías tus productos desde el archivo JSON
        this.selectedFilters = [];

        this.filterButton = document.getElementById("filterButton");
        this.filterModal = document.getElementById("filterModal");
        this.clearButton = document.getElementById("clearButton");
        this.productList = document.getElementById("productList");

        this.filterButton.addEventListener("click", this.openModal.bind(this));
        this.clearButton.addEventListener("click", this.clearFilters.bind(this));
        // Añade listeners para las opciones de filtro
        document.getElementById("rubia").addEventListener("change", this.toggleFilter.bind(this));
        document.getElementById("morena").addEventListener("change", this.toggleFilter.bind(this));
        document.getElementById("roja").addEventListener("change", this.toggleFilter.bind(this));

        this.renderProducts();
    }
}