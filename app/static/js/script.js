if(document.querySelector('.swiper-wrapper')) {
	@@include('libs/swiper.min.js');
}

if(document.querySelector('.banner-slider')) {
	const bannerSlider = new Swiper('.banner-slider', {
		loop: true,
		pagination: {
			el: '.banner-pag',
			type: 'bullets',
			clickable: true
		}
	});
}

const marketing = document.querySelector('.marketing');

if(marketing) {
	let counter = 0;
	const delay = 5000;
	const data = [
		{
			title: 'Title of product 1',
			where: 'Moscow, Russia'
		},
		{
			title: 'Title of product 2',
			where: 'Kiev, Ukraine'	
		},
		{
			title: 'Title of product 3',
			where: 'Rome, Italy'	
		}
	];
	const closeMarketing = () => {
		marketing.classList.remove('marketing--visible');
	}

	const changeMarketingData = () => {
		closeMarketing();
		setTimeout(() => {
			marketing.classList.add('marketing--visible');
		}, delay - 2000); 
		const stringTitle = `${data[counter].title}`;
		const stringWhere = `15 minutes ago ${data[counter].where}`;
		marketing.querySelector('.marketing__title').textContent = stringTitle;
		marketing.querySelector('.marketing__when-from').textContent = stringWhere;
		counter++;
		if(counter === data.length) {
			counter = 0;
		}
	}
	changeMarketingData();
	setInterval(changeMarketingData, delay);

	marketing.addEventListener('click', e => {
		const target = e.target;
		if(target.classList.contains('marketing__close')) {
			closeMarketing();
		}
	
	});
}



