// 定义数据
const data = {
    "我们": { "name": "Item 1", "description": "This is item 我们" },
    "测试": { "name": "Item 2", "description": "This is item 测试" },
    // 其他数据...
  };
  
  // 获取URL参数
  function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
  }
  
  // 获取id参数
  const id = getQueryParam('name');
  
  // 根据id查询并显示数据
  if (id && data[id]) {
    document.getElementById('result').innerHTML = `
      <h2>${data[id].name}</h2>
      <p>${data[id].description}</p>
    `;
  } else {
    document.getElementById('result').innerHTML = '<p>NOT FOUND</p>';
  }