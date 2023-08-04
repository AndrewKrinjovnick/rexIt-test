import { ReactComponent as FBIcon } from 'assets/icons/fb.svg';
import { ReactComponent as InstIcon } from 'assets/icons/inst.svg';
import { ReactComponent as MapPinIcon } from 'assets/icons/map-pin.svg';
import { ReactComponent as PhoneIcon } from 'assets/icons/phone.svg';
import { ReactComponent as PinterestIcon } from 'assets/icons/pinterest.svg';
import { ReactComponent as ShareIcon } from 'assets/icons/share.svg';
import { Container } from 'components/ui/Container';
import { FC } from 'react';
import { ContactColumn } from './ContactColumn';
import styles from './Footer.module.scss';

const socials = [
	{
		Icon: PinterestIcon,
		link: 'https://pinterest.com',
		title: 'pinterest.com',
	},
	{
		Icon: FBIcon,
		link: 'https://facebook.com',
		title: 'facebook.com',
	},
	{
		Icon: InstIcon,
		link: 'https://instagram.com',
		title: 'instagram.com',
	},
];

const contacts = [
	{
		content: (
			<a href='tel:+489873456789' className={styles.tel}>
				+48 (987) 345 - 6789
			</a>
		),
		Icon: PhoneIcon,
		title: 'phone',
	},
	{
		content: (
			<a
				href='https://www.google.com/maps/place/%D0%91%D0%B5%D1%80%D0%BB%D0%B8%D0%BD,+%D0%93%D0%B5%D1%80%D0%BC%D0%B0%D0%BD%D0%B8%D1%8F/@52.5056228,12.8010292,10z/data=!3m1!4b1!4m10!1m2!2m1!1sCracker+Inc.+10+Cloverfield+Lane+Berlin+IL+10928,+Germany!3m6!1s0x47a84e373f035901:0x42120465b5e3b70!8m2!3d52.5200066!4d13.404954!15sCjlDcmFja2VyIEluYy4gMTAgQ2xvdmVyZmllbGQgTGFuZSBCZXJsaW4gSUwgMTA5MjgsIEdlcm1hbnmSAQhsb2NhbGl0eeABAA!16zL20vMDE1NnE?entry=ttu'
				target='_blank'
				className={styles.map}
			>
				{['Cracker Inc.', '10 Cloverfield Lane', 'Berlin IL 10928, Germany'].map((text, index) => (
					<div className={styles.content} key={index}>
						{text}
					</div>
				))}
			</a>
		),
		Icon: MapPinIcon,
		title: 'address',
	},
	{
		content: (
			<div className={styles.socials}>
				{socials.map(({ Icon, link, title }, index) => (
					<a className={styles.social} href={link} key={index} target='_blank'>
						<div className={styles.icon}>
							<Icon />
						</div>
						<div className={styles.social_title}>{title}</div>
					</a>
				))}
			</div>
		),
		Icon: ShareIcon,
		title: 'share',
	},
];

export const Footer: FC = () => {
	return (
		<footer className={styles.footer}>
			<Container>
				<div className={styles.content_wrapper}>
					{contacts.map(({ content, Icon, title }, index) => (
						<ContactColumn key={index} title={title} Icon={<Icon />}>
							{content}
						</ContactColumn>
					))}
				</div>
			</Container>
		</footer>
	);
};
