browser.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (!tab.url.match(/^about:/)) {
    console.log("Test")
    browser.pageAction.show(tab.id);
  }
});
