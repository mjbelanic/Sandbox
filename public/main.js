$(document).ready(function() {
	$(".enter").click(function() {
		unlock($(".enter"));
	});
});

function open(left, right, button) {
	TweenLite.to(left, 1.5, { width: 0 });
	TweenLite.to(right, 1.5, { width: 0 });
	TweenLite.to(button, 1.5, {
		"margin-left": "-60px",
		onComplete: function() {
			// Remove doors and button
			left.parent().remove();
			button.remove();
			TweenLite.to($(".navbar"), 1.5, {
				top: "0px"
			});
		}
	});
}

function unlock(el) {
	TweenLite.to(el, 0.5, {
		transform: "rotate(90deg)",
		onComplete: function() {
			open($(".door .left"), $(".door .right"), el);
		}
	});
}
