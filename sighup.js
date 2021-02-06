
const email = document.getElementById('emial');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const phone = document.getElementById('phone');

fprm.addEventListener('submit',(e) => {
	e.prventDefault();

	validateForm();


});

function validateForm(){
	cont emialValue=email.value.trim();
	const passwordValue=password.value.trim();
	const password2Value=password2.value.trim();
	const phoneValue=phone.value.trim();

	if(emialValue === ''){

        setErrorFor(email,'email cannot be balnk' );

	} else {
	    setSuccessFor(email);

	}

	if(passwordValue === ''){

        setErrorFor(password,'Password cannot be balnk' );

	} else {
	    setSuccessFor(password);

	}
	if(password2Value === ''){

        setErrorFor(password2,'Password2 cannot be balnk' );

	} else {
	    setSuccessFor(password2);

	}
	if(phoneValue === ''){

        setErrorFor(phone,'Phone cannot be balnk' );

	} else {
	    setSuccessFor(phone);

	}
	function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

const floating_btn = document.querySelector('.floating-btn');
const close_btn = document.querySelector('.close-btn');
const social_panel_container = document.querySelector('.social-panel-container');

floating_btn.addEventListener('click', () => {
	social_panel_container.classList.toggle('visible')
});

close_btn.addEventListener('click', () => {
	social_panel_container.classList.remove('visible')
});


}
