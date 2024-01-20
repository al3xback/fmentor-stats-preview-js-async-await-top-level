import { createHeaderEl, createMainEl, createFooterEl } from './util.js';

/* initApp */
const body = document.body;

try {
	const headerEl = await createHeaderEl();
	const mainEl = await createMainEl();
	const footerEl = await createFooterEl();

	body.appendChild(headerEl);
	body.appendChild(mainEl);
	body.appendChild(footerEl);
} catch (err) {
	console.log(err);
}
