// Import other background scripts for modularity in MV3
importScripts('/script/background/utils.js', '/script/background/options.js', '/script/background/request.js');

chrome.runtime.onInstalled.addListener(onInstalled);
chrome.runtime.onMessage.addListener(onContentMessage);
chrome.tabs.onUpdated.addListener(onTabsUpdated);

function onInstalled(details) {
    if (details.reason == 'install') {
        setDefaultOptions();
    } else if (details.reason == 'update') {
        patchOptions();
    }
}

function onContentMessage(message, sender, sendResponse) {
    if (message.action == 'setOptions') {
        setOptions(message.content);
    }
    return true;
}
