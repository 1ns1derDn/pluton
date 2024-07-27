"use client"
// libs
import cn from "classnames"
import Link from "next/link"
import { usePathname } from "next/navigation"
//types
import { LayoutMainProps } from "./layout-main.types"

//styles
import { Button, Container, Logo } from "@/components"
import { useAuth } from "@/context"
import styles from "./layout-main.module.css"

const backgrounds: any = {
	["/meditation-of-meeting"]: "url(/backgrounds/medition.png)",
	["/pluton-meditation"]: "url(/backgrounds/pluton.png)",
}

export function LayoutMain({ className, children, ...otherProps }: LayoutMainProps) {
	const pathname = usePathname()
	const { logout } = useAuth()
	const { isAuth } = useAuth()
	return (
		<main
			className={cn([styles.layoutMain, className])}
			{...otherProps}
			style={{ backgroundImage: backgrounds[pathname] }}
		>
			<Container>
				<div className={styles.wrapper}>
					<Link href='/courses'>
						<Logo className={styles.logo} />
					</Link>
					{isAuth && (
						<Button className={styles.button} onClick={logout}>
							Выход
							<svg
								width='24'
								height='24'
								viewBox='0 0 24 24'
								fill='#E0D0B9'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									fill-rule='evenodd'
									clip-rule='evenodd'
									d='M15.9908 7.8224C16.2897 7.53559 16.7644 7.54536 17.0512 7.84422L20.541 11.4806C20.8195 11.7708 20.8195 12.229 20.541 12.5192L17.0512 16.1556C16.7644 16.4544 16.2897 16.4642 15.9908 16.1774C15.692 15.8906 15.6822 15.4158 15.969 15.117L18.2404 12.7501H11.2727C10.8585 12.7501 10.5227 12.4143 10.5227 12.0001C10.5227 11.5859 10.8585 11.2501 11.2727 11.2501H18.2408L15.969 8.88284C15.6822 8.58398 15.692 8.10921 15.9908 7.8224Z'
								/>
								<path
									fill-rule='evenodd'
									clip-rule='evenodd'
									d='M3.25 4C3.25 3.58579 3.58579 3.25 4 3.25H13.4545C13.8688 3.25 14.2045 3.58579 14.2045 4V7C14.2045 7.41421 13.8688 7.75 13.4545 7.75C13.0403 7.75 12.7045 7.41421 12.7045 7V4.75H4.75V19.25H12.7045V17C12.7045 16.5858 13.0403 16.25 13.4545 16.25C13.8688 16.25 14.2045 16.5858 14.2045 17V20C14.2045 20.4142 13.8688 20.75 13.4545 20.75H4C3.58579 20.75 3.25 20.4142 3.25 20V4Z'
								/>
							</svg>
						</Button>
					)}
				</div>

				{children}
			</Container>
			<div id='dialog' />
		</main>
	)
}
