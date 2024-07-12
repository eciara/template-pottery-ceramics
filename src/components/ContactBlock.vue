<template>
	<section class="contact-us">
		<div class="container">
			<div class="row contact-us__content">
				<div class="col-md-4 contact-us__box" v-for="item in contacts" :key="item.id">
					<div class="contact-us__box--icon">
						<font-awesome-icon :icon="item.icon" />
					</div>
					<div class="contact-us__box--copy">
						<p class="contact-us__box--title">{{ item.title }}</p>
						<div v-if="item.phone && item.phone !== ''">
							<a :href="'tel:' + item.phone">{{ item.descPhone }}</a>
						</div>
						<p>{{ item.desc }}</p>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

export default {
	name: 'ContactBlock',
	data() {
		return {
			contacts: [
				{
					id: 1,
					icon: faPhone,
					title: 'Contact US',
					descPhone: '+48 123 123 123',
					phone: '#',
				},
				{
					id: 2,
					icon: faEnvelope,
					title: 'Mail Address',
					desc: 'info@info.com'
				},
				{
					id: 3,
					icon: faLocationDot,
					title: 'Our Studio',
					desc: ' ul. Kartuzka 25, Poznań'
				}
			],
			components: {
				FontAwesomeIcon
			}
		}
	}
}
</script>

<style lang="scss">
@import '@/assets/scss/_variables.scss';

.contact-us {
	&__content {
		padding-block: 2.5rem;
		border-bottom: 1.5px solid $accent-color;
	}

	&__box {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 1.5rem;

		&--icon {
			color: $accent-color;
			font-size: 2rem;
		}

		&--title {
			font-family: Montserrat-Medium;
			font-size: 1.4rem;
			font-weight: 600;
		}
	}

}
</style>