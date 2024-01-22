//JavaScript

OrgChart.templates.myTemplate = Object.assign({}, OrgChart.templates.ana);
OrgChart.templates.myTemplate.size = [125, 190];
OrgChart.templates.myTemplate.node = '<rect x="0" y="0" height="190" width="125" fill="#ffffff" stroke-width="1" stroke="#aeaeae" rx="5" ry="5"></rect>';
OrgChart.templates.myTemplate.field_0 = '<text data-width="100" data-text-overflow="multiline" style="font-size: 15px;font-weight: bold;" fill="#2D2D2D" x="62.5" y="85" text-anchor="middle">{val}</text>';
OrgChart.templates.myTemplate.field_1 = '<text data-width="110" data-text-overflow="multiline"  style="font-size: 12px;" fill="#2D2D2D" x="62.5" y="125" text-anchor="middle">{val}</text>';
OrgChart.templates.myTemplate.img_0 = '<image preserveAspectRatio="xMidYMid slice" clip-path="url(#{randId})" xlink:href="{val}" x="32.5" y="7"  width="60" height="60"></image>';
OrgChart.templates.myTemplate.plus = '<circle cx="15" cy="15" r="15" fill="#212529" stroke="#ffffff" stroke-width="1"></circle>'
  + '<line x1="4" y1="15" x2="26" y2="15" stroke-width="1" stroke="#ffffff"></line>'
  + '<line x1="15" y1="4" x2="15" y2="26" stroke-width="1" stroke="#ffffff"></line>';
OrgChart.templates.myTemplate.minus = '<circle cx="15" cy="15" r="15" fill="#212529" stroke="#ffffff" stroke-width="1"></circle>'
  + '<line x1="4" y1="15" x2="26" y2="15" stroke-width="1" stroke="#ffffff"></line>';



var editForm = function () {
  this.nodeId = null;
};

editForm.prototype.init = function (obj) {
  var that = this;
  this.obj = obj;
  this.editForm = document.getElementById("editForm");
  this.imgInput = document.getElementById("img");
  this.nameInput = document.getElementById("name");
  this.titleInput = document.getElementById("title");
  this.cancelButton = document.getElementById("close");

  this.cancelButton.addEventListener("click", function () {
    that.hide();
  });
};

editForm.prototype.show = function (nodeId) {
  this.nodeId = nodeId;

  var left = document.body.offsetWidth / 2 - 150;

  this.editForm.style.left = left + "px";
  var node = chart.get(nodeId);
  if (!node) return;
  this.imgInput.src = node.img ? node.img : "#";
  this.nameInput.innerHTML = node.name ? node.name : "";
  this.titleInput.innerHTML = node.title ? node.title : "";

  this.editForm.style.display = "block";

  OrgChart.animate(this.editForm, { opacity: 0 }, { opacity: 1 }, 300, OrgChart.anim.inOutSin);
};

editForm.prototype.content = function (id, detailsMode, dontAnim, width, dontRenderButtons) {
  var div = document.createElement('div');
  div.innerHTML = document.getElementById('editForm').innerHTML;
  div.innerHTML += '<style>#close{display:none !important;}</style>';
  return { element: div, focusId: '', title: '', shareText: '' };
};

editForm.prototype.hide = function (showldUpdateTheNode) {
  this.editForm.style.display = "none";
  this.editForm.style.opacity = 0;

};

var chart = new OrgChart(document.getElementById('tree'), {
  mouseScrool: OrgChart.none,
  toolbar: {
    zoom: true,
  },
  menu: {
    pdfPreview: {
      text: "PDF Preview",
      icon: OrgChart.icon.pdf(24, 24, '#7A7A7A'),
      onClick: preview
    },
    pdf: { text: "Export PDF" },
    png: { text: "Export PNG" },
    svg: { text: "Export SVG" },
    csv: { text: "Export CSV" }
  },
  nodeMenu: {
    pdf: { text: "Export PDF" },
    png: { text: "Export PNG" },
    svg: { text: "Export SVG" }
  },
  enableSearch: false,
  template: "myTemplate",
  nodeBinding: {
    field_0: "name",
    field_1: 'title',
    img_0: "img"
  },
  editUI: new editForm(),
});


chart.load([
  {
    name: 'Kaschif R. Israr',
    id: 'Managing Director',
    title: 'Managing Director',
    img: 'https://eurocentra.github.io/El-Corte-Ingles/assets/images/Color/Kashif Israr1.png',
  },
  {
    name: 'Merchandising Team',
    id: 'Merchandising',
    pid: 'Managing Director',
    title: '',
    img: 'https://eurocentra.github.io/El-Corte-Ingles/assets/images/business.png',
  },
  {
    name: 'Technical Team',
    id: 'Technical',
    pid: 'Managing Director',
    title: '',
    img: 'https://eurocentra.github.io/El-Corte-Ingles/assets/images/tech.png',
  },
  {
    name: 'Services Team',
    id: 'Services',
    pid: 'Managing Director',
    title: '',
    img: 'https://eurocentra.github.io/El-Corte-Ingles/assets/images/idea.png',
  },
  {
    name: 'Supply Chain',
    id: 'Supply',
    pid: 'Managing Director',
    title: '',
    img: 'https://eurocentra.github.io/El-Corte-Ingles/assets/images/supply.png',
  },
  {
    name: '3D Product Innovation / TPD',
    id: 'innovation',
    pid: 'Managing Director',
    title: '',
    img: 'https://eurocentra.github.io/El-Corte-Ingles/assets/images/idea.png',
  },
  {
    name: 'Digital Studio',
    id: 'studio',
    pid: 'Managing Director',
    title: '',
    img: 'https://eurocentra.github.io/El-Corte-Ingles/assets/images/tech.png',
  },
  {
    name: 'Operational Support Group (OSG)',
    id: 'OSG',
    pid: 'Managing Director',
    title: '',
    img: 'https://eurocentra.github.io/El-Corte-Ingles/assets/images/osg.png',
  },
  {
    name: 'Rana Sohaib Mustafa',
    id: 'Rana Sohaib Mustafa',
    pid: 'Technical',
    title: 'Division Head Technical & Manufacturing',
    img: 'https://eurocentra.github.io/El-Corte-Ingles/assets/images/Color/rana-sohaib.png',
  },
  {
    name: 'Zahid Sajjad',
    id: 'Zahid Sajjad',
    pid: 'Services',
    title: 'Division Head Sustainability, Digital Innovation & Services',
    img: 'https://eurocentra.github.io/El-Corte-Ingles/assets/images/Color/zahid-sajjad1.png',
  },
  {
    name: 'Abdul Saboor',
    id: 'Abdul Saboor',
    pid: 'Supply',
    title: 'Division Head Stretegic sourcing & Supply Chain Tranparency',
    img: 'https://eurocentra.github.io/El-Corte-Ingles/assets/images/Color/abdul-saboor.png',
  },
  {
    name: 'Madni Khan',
    id: 'Madni Khan',
    pid: 'OSG',
    title: 'Manager Finance & Corporate Governance',
    img: 'https://eurocentra.github.io/El-Corte-Ingles/assets/images/Color/madni-khan.png',
  },
  {
    name: 'Faisal Nizami',
    id: 'Faisal Nizami',
    pid: 'Merchandising',
    title: 'Division Head Home - Textile',
    img: 'https://eurocentra.github.io/El-Corte-Ingles/assets/images/Color/faisal-nizami.png',
  },
  {
    name: 'Owais Muhammad',
    id: 'Owais Muhammad',
    pid: 'Merchandising',
    title: 'Division Head Woven',
    img: 'https://eurocentra.github.io/El-Corte-Ingles/assets/images/Color/Owais Muhammad.png',
  },
  {
    name: 'Ghulam Mustafa',
    id: 'Ghulam Mustafa',
    pid: 'Merchandising',
    title: 'Division Head Knitwear/Non - Textile',
    img: 'https://eurocentra.github.io/El-Corte-Ingles/assets/images/Color/Ghulam Mustafa.png',
  },
  {
    name: 'Haseeb-ul-Haq',
    id: 'Haseeb-ul-Haq',
    pid: 'Merchandising',
    title: 'Division Head Sfera',
    img: 'https://eurocentra.github.io/El-Corte-Ingles/assets/images/Color/haseeb-ul-haq.png',
  },
  {
    name: 'Muhammad Talha',
    id: 'Muhammad Talha',
    pid: 'Faisal Nizami',
    title: 'Deputy Merchandising Manager',
    img: 'https://eurocentra.github.io/El-Corte-Ingles/assets/images/Color/Muhammad Talha.png',
  },
  {
    name: 'Ghazal Siddique',
    id: 'Ghazal Siddique',
    pid: 'Faisal Nizami',
    title: 'Deputy Merchandising Manager',
    img: 'https://eurocentra.github.io/El-Corte-Ingles/assets/images/Color/ghazal-siddiqui.png',
  },
  {
    name: 'Usman Ahmed Rizvi',
    id: 'Usman Ahmed Rizvi',
    pid: 'Ghazal Siddique',
    title: 'Assistant Merchandising Manager',
    img: 'https://eurocentra.github.io/El-Corte-Ingles/assets/images/Color/no-image.png',
  },
  {
    name: 'Hadi Saleem',
    id: 'Hadi Saleem',
    pid: 'Owais Muhammad',
    title: 'Deputy Merchandising Manager',
    img: 'https://eurocentra.github.io/El-Corte-Ingles/assets/images/Color/hadi-saleem.png',
  },
  {
    name: 'Zeeshan Khan',
    id: 'Zeeshan Khan',
    pid: 'Owais Muhammad',
    title: 'Deputy Merchandising Manager',
    img: 'https://eurocentra.github.io/El-Corte-Ingles/assets/images/Color/zeeshan-khan.png',
  },
  {
    name: 'Syed Wajahat',
    id: 'Syed Wajahat',
    pid: 'Hadi Saleem',
    title: 'Assistant Merchandising Manager',
    img: 'https://eurocentra.github.io/El-Corte-Ingles/assets/images/Color/Syed Wajahat.png',
  },
  {
    name: 'Abdul Rafay Khan',
    id: 'Abdul Rafay Khan',
    pid: 'Zeeshan Khan',
    title: 'Assistant Merchandising Manager',
    img: 'https://eurocentra.github.io/El-Corte-Ingles/assets/images/Color/Abdul Rafay Khan.png',
  },
  {
    name: 'Usman Naveed',
    id: 'Usman Naveed',
    pid: 'Zeeshan Khan',
    title: 'Assistant Merchandising Manager',
    img: 'https://eurocentra.github.io/El-Corte-Ingles/assets/images/Color/Usman Naveed.png',
  },
  {
    name: 'Shahid Ali Shoukat',
    id: 'Shahid Ali Shoukat',
    pid: 'Ghulam Mustafa',
    title: 'Deputy Merchandising Manager',
    img: 'https://eurocentra.github.io/El-Corte-Ingles/assets/images/Color/shahid-ali.png',
  },
  {
    name: 'Fahad Majeed',
    id: 'Fahad Majeed',
    pid: 'Ghulam Mustafa',
    title: 'Deputy Merchandising Manager',
    img: 'https://eurocentra.github.io/El-Corte-Ingles/assets/images/Color/fahad-majeed.png',
  },
  {
    name: 'Muhammad Atif',
    id: 'Muhammad Atif',
    pid: 'Fahad Majeed',
    title: 'Assistant Merchandising Manager',
    img: 'https://eurocentra.github.io/El-Corte-Ingles/assets/images/Color/atif-saleem.png',
  },
  {
    name: 'Syed Farhan Haider',
    id: 'Syed Farhan Haider',
    pid: 'Haseeb-ul-Haq',
    title: 'Assistant Merchandising Manager',
    img: 'https://eurocentra.github.io/El-Corte-Ingles/assets/images/Color/Syed Farhan Haider.png',
  },
  {
    name: 'Husnain Nawaz',
    id: 'Husnain Nawaz',
    pid: 'Haseeb-ul-Haq',
    title: 'Assistant Merchandising Manager',
    img: 'https://eurocentra.github.io/El-Corte-Ingles/assets/images/Color/no-image.png',
  },
  {
    name: 'Waqas Ahmed',
    id: 'Waqas Ahmed',
    pid: 'Haseeb-ul-Haq',
    title: 'Assistant Merchandising Manager',
    img: 'https://eurocentra.github.io/El-Corte-Ingles/assets/images/Color/Waqas Ahmed.png',
  },
  {
    name: 'Ali Anwar',
    id: 'Ali Anwar',
    pid: 'Rana Sohaib Mustafa',
    title: 'Regional Quality Manager',
    img: 'https://eurocentra.github.io/El-Corte-Ingles/assets/images/Color/ali-anwer.png',
  },

  {
    name: 'Ayaz ul Hassan',
    id: 'Ayaz ul Hassan',
    pid: 'Ali Anwar',
    title: 'Quality Lead',
    img: 'https://eurocentra.github.io/El-Corte-Ingles/assets/images/Color/ayazul-hasan.png',
  },
  {
    name: 'Muhammad Atif Khan',
    id: 'Muhammad Atif Khan',
    pid: 'Ayaz ul Hassan',
    title: 'Quality Lead',
    tags: ['partner'],
    img: 'https://eurocentra.github.io/El-Corte-Ingles/assets/images/Color/Muhammad Atif Khan.png',
  },
  {
    name: 'Ghazanfar Adeel',
    id: 'Ghazanfar Adeel',
    pid: 'Ayaz ul Hassan',
    title: 'Quality Lead',
    tags: ['partner'],
    img: 'https://eurocentra.github.io/El-Corte-Ingles/assets/images/Color/Ghazanfar Adeel.png',
  },
  {
    name: 'Jawed Ayub',
    id: 'Jawed Ayub',
    pid: 'Ayaz ul Hassan',
    ppid: 'Muhammad Atif Khan',
    title: 'Quality Lead',
    img: 'https://eurocentra.github.io/El-Corte-Ingles/assets/images/Color/jawed-ayub.png',
  },
  {
    name: 'Kamran Ali Abid',
    id: 'Kamran Ali Abid',
    pid: 'Ayaz ul Hassan',
    ppid: 'Ghazanfar Adeel',
    title: 'Quality Lead',
    img: 'https://eurocentra.github.io/El-Corte-Ingles/assets/images/Color/kamran-ali-abid.png',
  },
  {
    name: 'Alam Hussain',
    id: 'Alam Hussain',
    pid: 'Ali Anwar',
    title: 'Quality Lead',
    img: 'https://eurocentra.github.io/El-Corte-Ingles/assets/images/Color/Alam Hussain.png',
  },
  {
    name: 'Rao Kamran Ahmed',
    id: 'Rao Kamran Ahmed',
    pid: 'Alam Hussain',
    tags: ['partner'],
    title: 'Quality Lead',
    img: 'https://eurocentra.github.io/El-Corte-Ingles/assets/images/Color/Rao Kamran Ahmed.png',
  },
  {
    name: 'Rizwan Ali Attary',
    id: 'Rizwan Ali Attary',
    pid: 'Alam Hussain',
    tags: ['partner'],
    title: 'Quality Lead',
    img: 'https://eurocentra.github.io/El-Corte-Ingles/assets/images/Color/rizwan-ali.png',
  },
  {
    name: 'Syed Asif Kareem',
    id: 'Syed Asif Kareem',
    pid: 'Alam Hussain',
    ppid: 'Rao Kamran Ahmed',
    title: 'Quality Lead',
    img: 'https://eurocentra.github.io/El-Corte-Ingles/assets/images/Color/Syed Asif Kareem.png',
  },
  {
    name: 'Atif Zaheer',
    id: 'Atif Zaheer',
    pid: 'Alam Hussain',
    ppid: 'Rizwan Ali Attary',
    title: 'Quality Lead',
    img: 'https://eurocentra.github.io/El-Corte-Ingles/assets/images/Color/Atif Zaheer.png',
  },
  {
    name: 'Muhammad Ali',
    id: 'Muhammad Ali',
    pid: 'Ali Anwar',
    title: 'Quality Lead',
    img: 'https://eurocentra.github.io/El-Corte-Ingles/assets/images/Color/Muhammad-Ali.jpg',
  },
  {
    name: 'Muhammad Imran',
    id: 'Muhammad Imran',
    pid: 'Muhammad Ali',
    tags: ['partner'],
    title: 'Quality Lead',
    img: 'https://eurocentra.github.io/El-Corte-Ingles/assets/images/Color/Muhammad Imran.png',
  },
  {
    name: 'Muhammad Rizwan',
    id: 'Muhammad Rizwan',
    pid: 'Muhammad Ali',
    tags: ['partner'],
    title: 'Quality Lead',
    img: 'https://eurocentra.github.io/El-Corte-Ingles/assets/images/Color/Muhammad Rizwan.png',
  },
  {
    name: 'Muhammad Qasim',
    id: 'Muhammad Qasim',
    pid: 'Muhammad Ali',
    ppid: 'Muhammad Imran',
    title: 'Quality Lead',
    img: 'https://eurocentra.github.io/El-Corte-Ingles/assets/images/Color/Muhammad Qasim.png',
  },
  {
    name: 'Salman Saeed',
    id: 'Salman Saeed',
    pid: 'Muhammad Ali',
    ppid: 'Muhammad Rizwan',
    title: 'Quality Lead',
    img: 'https://eurocentra.github.io/El-Corte-Ingles/assets/images/Color/Salman Saeed.png',
  },
  {
    name: 'Zeeshan Haider',
    id: 'Zeeshan Haider',
    pid: 'Ali Anwar',
    title: 'Quality Lead',
    img: 'https://eurocentra.github.io/El-Corte-Ingles/assets/images/Color/zeeshan-haidar.png',
  },
  {
    name: 'Nosherwan Tahir',
    id: 'Nosherwan Tahir',
    pid: 'Zeeshan Haider',
    tags: ['partner'],
    title: 'Quality Lead',
    img: 'https://eurocentra.github.io/El-Corte-Ingles/assets/images/Color/Nosherwan Tahir.png',
  },
  {
    name: 'Muhammad Ali Murtaza',
    id: 'Muhammad Ali Murtaza',
    pid: 'Zeeshan Haider',
    ppid: 'Nosherwan Tahir',
    title: 'Quality Lead',
    img: 'https://eurocentra.github.io/El-Corte-Ingles/assets/images/Color/Muhammad Ali Murtaza.png',
  },
  {
    name: 'Subhan Ashraf',
    id: 'Subhan Ashraf',
    pid: 'Zeeshan Haider',
    ppid: 'Nosherwan Tahir',
    title: 'Quality Lead',
    img: 'https://eurocentra.github.io/El-Corte-Ingles/assets/images/Color/Subhan Ashraf.png',
  },
  {
    name: 'Ismail Khan',
    id: 'Ismail Khan',
    pid: 'Rana Sohaib Mustafa',
    title: 'Manager, Chemical & Testing Management',
    img: 'https://eurocentra.github.io/El-Corte-Ingles/assets/images/Color/Muhammad Ismail.jpg',
  },
  {
    name: 'Dania Jamil',
    id: 'Dania Jamil',
    pid: 'Rana Sohaib Mustafa',
    title: 'Testing& Material Manager',
    img: 'https://eurocentra.github.io/El-Corte-Ingles/assets/images/Color/dania-jameel.png',
  },
  {
    name: 'Muhammad Owais',
    id: 'Muhammad Owais',
    pid: 'Dania Jamil',
    title: 'Testing Executive',
    img: 'https://eurocentra.github.io/El-Corte-Ingles/assets/images/Color/owais-khan.png',
  },
  {
    name: 'Mueez Ahmed',
    id: 'Mueez Ahmed',
    pid: 'Dania Jamil',
    title: 'Testing Executive',
    img: 'https://eurocentra.github.io/El-Corte-Ingles/assets/images/Color/Mueez Ahmed Khan.png',
  },
  {
    name: 'Danish Paracha',
    id: 'Danish Paracha',
    pid: 'Rana Sohaib Mustafa',
    title: 'Deputy Manager PD',
    img: 'https://eurocentra.github.io/El-Corte-Ingles/assets/images/Color/danish-paracha.png',
  },
  {
    name: 'Habib Ahmed',
    id: 'Habib Ahmed',
    pid: 'Danish Paracha',
    title: 'Technical Lead',
    img: 'https://eurocentra.github.io/El-Corte-Ingles/assets/images/Color/habib-ahmed.png',
  },
  {
    name: 'Shandar Mehdi',
    id: 'Shandar Mehdi',
    pid: 'Danish Paracha',
    title: 'Technical Lead',
    img: 'https://eurocentra.github.io/El-Corte-Ingles/assets/images/Color/shandar-mehdi.png',
  },
  {
    name: 'Muhammad Tanveer',
    id: 'Muhammad Tanveer',
    pid: 'Danish Paracha',
    title: 'Technical Lead',
    img: 'https://eurocentra.github.io/El-Corte-Ingles/assets/images/Color/Muhammad Tanveer.png',
  },
  {
    name: 'Wanhar Mushtaq',
    id: 'Wanhar Mushtaq',
    pid: 'Danish Paracha',
    title: 'Technical Lead',
    img: 'https://eurocentra.github.io/El-Corte-Ingles/assets/images/Color/wanhar-mushtaq.png',
  },
  {
    name: 'Syed Faisal Iqbal',
    id: 'Syed Faisal Iqbal',
    pid: 'Danish Paracha',
    title: 'Technical Lead',
    img: 'https://eurocentra.github.io/El-Corte-Ingles/assets/images/Color/faisal-iqbal.png',
  },
  {
    name: 'MIS',
    id: 'MIS',
    pid: 'Zahid Sajjad',
    title: '',
    img: '',
    email: ''
  },
  {
    name: 'Sustainability & CSR',
    id: 'csr',
    pid: 'Zahid Sajjad',
    title: '',
    img: '',
    email: ''
  },
  {
    name: 'Logistics',
    id: 'Logistics',
    pid: 'Zahid Sajjad',
    title: '',
    img: '',
    email: ''
  },
  {
    name: 'Human Resource',
    id: 'Hr',
    pid: 'Zahid Sajjad',
    title: '',
    img: '',
    email: ''
  },
  {
    name: 'Ahmed Adeel',
    id: 'Ahmed Adeel',
    pid: 'csr',
    title: 'CSR & Sustainability Manager',
    img: 'https://eurocentra.github.io/El-Corte-Ingles/assets/images/Color/Adeel Ahmed.png',
  },
  {
    name: 'Basit Ali',
    id: 'Basit Ali',
    pid: 'Ahmed Adeel',
    title: 'CSR Executive',
    img: 'https://eurocentra.github.io/El-Corte-Ingles/assets/images/Color/Basit ali.png',
  },
  {
    name: 'Muhammad Aamir',
    id: 'Muhammad Aamir',
    pid: 'MIS',
    title: 'MIS Manager',
    img: 'https://eurocentra.github.io/El-Corte-Ingles/assets/images/Color/9.png',
  },
  {
    name: 'Sadad Ali',
    id: 'Sadad Ali',
    pid: 'Muhammad Aamir',
    title: 'MIS Executive',
    img: 'https://eurocentra.github.io/El-Corte-Ingles/assets/images/Color/19.png',
  },
  {
    name: 'Hammad',
    id: 'Hammad',
    pid: 'Muhammad Aamir',
    title: 'Quality Executive',
    img: 'https://eurocentra.github.io/El-Corte-Ingles/assets/images/Color/no-image.png',
  },
  {
    name: 'Grephen Almas',
    id: 'Grephen Almas',
    pid: 'Logistics',
    title: 'Logistics Manager',
    img: 'https://eurocentra.github.io/El-Corte-Ingles/assets/images/Color/grephen-almas.png',
  },
  {
    name: 'Irfan Ahmed Khan',
    id: 'Irfan Ahmed Khan',
    pid: 'Grephen Almas',
    title: 'Deputy Logistics Manager',
    img: 'https://eurocentra.github.io/El-Corte-Ingles/assets/images/Color/Irfan Ahmed Khan.png',
  },
  {
    name: 'Muhammad Kashif',
    id: 'Muhammad Kashif',
    pid: 'Irfan Ahmed Khan',
    title: 'Assistant Logistics Manager',
    img: 'https://eurocentra.github.io/El-Corte-Ingles/assets/images/Color/kashif-khan.png',
  },
  {
    name: 'Khalid Imran',
    id: 'Khalid Imran',
    pid: 'Muhammad Kashif',
    title: 'Logistics Executive',
    img: 'https://eurocentra.github.io/El-Corte-Ingles/assets/images/Color/Khalid Imran.png',
  },
  {
    id: 'Muhammad Safwan',
    pid: 'Hr',
    name: 'Muhammad Safwan',
    title: 'HR Manager',
    img: 'https://eurocentra.github.io/El-Corte-Ingles/assets/images/Color/6.png',
  },
  {
    name: 'Rashna',
    id: 'Rashna',
    pid: 'Abdul Saboor',
    title: 'Sourcing Executive',
    img: 'https://eurocentra.github.io/El-Corte-Ingles/assets/images/Color/no-image.png',
  },
  {
    name: 'Absar',
    id: 'Absar',
    pid: 'Abdul Saboor',
    title: 'Sourcing Executive',
    img: 'https://eurocentra.github.io/El-Corte-Ingles/assets/images/Color/no-image.png',
  },
  {
    name: 'Amna Minhas',
    id: 'Amna Minhas',
    pid: 'innovation',
    title: 'Division Head Digitalization & Browzwear',
    img: 'https://eurocentra.github.io/El-Corte-Ingles/assets/images/Color/Amna Naveed.png',
  },
  {
    name: 'Imran Amjad',
    id: 'Imran Amjad',
    pid: 'Amna Minhas',
    title: '3D Team Lead',
    img: 'https://eurocentra.github.io/El-Corte-Ingles/assets/images/Color/Imran Amjad.png',
  },
  {
    name: 'Hassan Hussain',
    id: 'Hassan Hussain',
    pid: 'Imran Amjad',
    title: '3D Product Developer',
    img: 'https://eurocentra.github.io/El-Corte-Ingles/assets/images/Color/Hassan Hussain.png',
  },
  {
    name: 'Sana Zahid',
    id: 'Sana Zahid',
    pid: 'Imran Amjad',
    title: '3D Product Developer',
    img: 'https://eurocentra.github.io/El-Corte-Ingles/assets/images/Color/7.png',
  },
  {
    name: 'Umair Ahmed',
    id: 'Umair Ahmed',
    pid: 'studio',
    title: 'Digital Catalogue',
    img: 'https://eurocentra.github.io/El-Corte-Ingles/assets/images/Color/Umair ahmed.png',
  },
  {
    name: 'Sikandar Solangi',
    id: 'Sikandar Solangi',
    pid: 'Umair Ahmed',
    title: 'Librarian',
    img: 'https://eurocentra.github.io/El-Corte-Ingles/assets/images/Color/60.png',
  },
  {
    name: 'Sajjad Hussain',
    id: 'Sajjad Hussain',
    pid: 'Madni Khan',
    title: 'IT & Communication Manager',
    img: 'https://eurocentra.github.io/El-Corte-Ingles/assets/images/Color/sajjad.png',
  },
  {
    name: 'Abdul Manan',
    id: 'Abdul Manan',
    pid: 'Madni Khan',
    title: 'Facility Services Manager',
    img: 'https://eurocentra.github.io/El-Corte-Ingles/assets/images/Color/abdul-manan.png',
  }

]);



document.getElementById('editForm').addEventListener('click', function (e) {
  e.preventDefault();
  chart.editUI.hide();
})

function preview() {
  OrgChart.pdfPrevUI.show(chart, {
    format: 'A4'
  });
}
