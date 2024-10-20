<!-- start Simple Custom CSS and JS -->
<script type="text/javascript">
 

let podcastWarnMaxTimes = 3;

const saveBtnClass = `button.editor-post-publish-button`;
const firstPublishBtnClass = `button.editor-post-publish-button__button`;
const podcastInputClass = `#powerpress_url_display_podcast`;

const isAdmin = () => {
	return !!location.href.match(`wp-admin`);
}

	
const isAdminEditorSundaySermon = () => {
	return !!document.querySelector(`h1.editor-post-title `)?.innerText.match(`主日讲章/`)
}
	
const isMp3PodcastNotSet = () => {
	const inputV = document.querySelector(podcastInputClass)?.value
	return inputV.length < 30 || !inputV.match(`.mp3`);
}
	
const listenAdminEditorButtonSave = () => {
	const saveBtnEle = document.querySelector(saveBtnClass);
	const firstPublishBtnEle = document.querySelector(firstPublishBtnClass);
	
	const finalSaveBtn = saveBtnEle || firstPublishBtnEle
	
	if (!finalSaveBtn) {
		console.log(`Blog save button in admin is not found with`, saveBtnClass, firstPublishBtnEle);
		setTimeout(() => listenAdminEditorButtonSave(), 2000)
		return false;
	}
	
	finalSaveBtn.addEventListener(`mousedown`, () => {
		requireMp3MediaForPodcast();
	});
	
	return true;

}

const requireMp3MediaForPodcast = () => {
	
	if (!isAdminEditorSundaySermon()) {
		return;
	}
	if (isMp3PodcastNotSet() && podcastWarnMaxTimes-- > 0) {
		alert('请给主日讲章设置正确的播客MP3，因为苹果播客和油管播客都要个 mp3. 链接必须是 .mp3 结尾。剩余警告次数：' + podcastWarnMaxTimes + '次.');
		document.querySelector(`#powerpress-podcast .handlediv[aria-expanded="false"]`)?.click()
		const inputElement = document.querySelector(podcastInputClass);
		inputElement.setSelectionRange(0, 0);
  		inputElement.focus();
		return false;
	}

}

if (isAdmin()) {
	listenAdminEditorButtonSave();
}


</script>
<!-- end Simple Custom CSS and JS -->
