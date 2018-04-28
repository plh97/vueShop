
const domFunc = (e) => {
  const {
    dom,
    style
  } = e;
  for (const i in style) {
    dom.style[i] = style[i];
  }
};

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
const isNumeric = n => !isNaN(parseFloat(n)) && isFinite(n);

// 添加Array属性
const addArrProp = e => Array.prototype.slice.call(e);
// 只能判断精确到个体dom元素，无法判断一个系列的dom是否处于点击范围
const isDomInPathFunc = (args) => {
  const {
    path,
    selector
  } = args;
  for (let i = 0; i < path.length; i += 1) {
    if (path[i] === document.querySelector(selector)) {
      return path[i];
    } else if (path[i] === document.body) {
      return false;
    }
  }
};

const isIdInPathFunc = (args) => {
  const {
    path,
    id
  } = args;
  for (let i = 0; i < path.length; i += 1) {
    if (path[i].id === id) {
      return path[i];
    } else if (path[i] === document.body) {
      return false;
    }
  }
};

const isClassInPathFunc = (args) => {
  const {
    path,
    className
  } = args;
  for (let i = 0; i < path.length; i += 1) {
    if (path[i].classList.contains(className)) {
      return path[i];
    } else if (path[i] === document.body) {
      return false;
    }
  }
};

const isDomFunc = (args) => {
  const {
    path,
    dom
  } = args;
  for (let i = 0; i < path.length; i += 1) {
    if (path[i] === dom) {
      return dom;
    } else if (path[i] === document.body) {
      return false;
    }
  }
};
  // toggle show dom animation
const domToggleAnimation = (args) => {
  const {
    dom,
    animationName,
    animationDuration,
    animationFillMode
  } = args;
  if (
    dom.style.animationName === animationName[1]
  ) {
    dom.style.animationDuration = animationDuration;
    dom.style.animationFillMode = animationFillMode;
    dom.style.animationName = animationName[0];
  } else {
    dom.style.animationDuration = animationDuration;
    dom.style.animationFillMode = animationFillMode;
    dom.style.animationName = animationName[1];
  }
};
  // ===============Tool==============
  // feature function
const showDomFunc = (args) => {
  const {
    allDom,
    showDom
  } = args;
  allDom.forEach((dom) => {
    dom.style.display = 'none';
  });
  showDom.forEach((dom) => {
    dom.style.display = 'flex';
  });
};
  // 添加事件
const addEvent = (e) => {
  const {
    dom,
    event,
    func
  } = e;
  dom.addEventListener(event, func, false);
  return dom;
};

  // 字符串转Boolean
const transformStringToBool = (e) => {
  if (e === 'true') {
    return true;
  }
  return false;
};

const getPath = e => {
  const composedPath = (el) => {
    const path = [];
    while (el) {
      path.push(el);
      if (el.tagName === 'HTML') {
        path.push(document);
        path.push(window);
        return path;
      }
      el = el.parentElement;
    }
  };
  return e.path || (e.composedPath && e.composedPath()) || composedPath(e.target);
};

const tottleShowSelect = ({ dom, styles }) => {
  const selectNum = dom.parentElement.parentElement.querySelectorAll(`.${styles.active}`).length;
  const allNum = dom.parentElement.parentElement.children.length - 1;
  const parentShowSelectDom = dom.parentElement.parentElement.children[0];
  if (selectNum === 0) {
    // ('没选');
    parentShowSelectDom.className = '';
  } else if (allNum > selectNum) {
    // console.log('一个以上');
    parentShowSelectDom.className = styles.halfSelect;
  } else {
    // console.log('全选');
    parentShowSelectDom.className = styles.allSelect;
  }
};

const createElementFromHTML = (htmlString) => {
  const div = document.createElement('div');
  div.innerHTML = htmlString.trim();
  return div.firstChild;
};

const fetchData = (args) => {
  const { url, data, header } = args;
  return new Promise((resolve, reject) => {
    fetch(url + data, header)
      .then(res => res.json())
      .then(json => resolve(json))
      .catch(err => reject(err));
  });
};
const isMobile = () => {
  const userAgentInfo = navigator.userAgent;
  const Agents = ['Android', 'iPhone', 'SymbianOS', 'Windows Phone', 'iPad', 'iPod'];
  let flag = false;
  for (let v = 0; v < Agents.length; v += 1) {
    if (userAgentInfo.indexOf(Agents[v]) > 0) {
      flag = true;
      break;
    }
  }
  return flag;
};

//金额格式化
const numberFormat = (number, decimals, dec_point, thousands_sep) => {
  /*
  * 参数说明：
  * number：要格式化的数字
  * decimals：保留几位小数
  * dec_point：小数点符号
  * thousands_sep：千分位符号
  * */
  number = (number + '').replace(/[^0-9+-Ee.]/g, '');
  var n = !isFinite(+number) ? 0 : +number,
    prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
    sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep,
    dec = (typeof dec_point === 'undefined') ? '.' : dec_point,
    s = '',
    toFixedFix = function (n, prec) {
      var k = Math.pow(10, prec);
      return '' + Math.ceil(n * k) / k;
    };

  s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');
  var re = /(-?\d+)(\d{3})/;
  while (re.test(s[0])) {
    s[0] = s[0].replace(re, "$1" + sep + "$2");
  }

  if ((s[1] || '').length < prec) {
    s[1] = s[1] || '';
    s[1] += new Array(prec - s[1].length + 1).join('0');
  }
  return s.join(dec);
};

const Dom = {
  domFunc,
  fetchData,
  sleep,
  isMobile,
  isDomInPathFunc,
  isIdInPathFunc,
  isClassInPathFunc,
  createElementFromHTML,
  domToggleAnimation,
  transformStringToBool,
  addArrProp,
  showDomFunc,
  addEvent,
  isDomFunc,
  isNumeric,
  getPath,
  tottleShowSelect,
  numberFormat
  
};

export default Dom;

