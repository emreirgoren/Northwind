import React from 'react'
import { Dropdown, Menu, Image } from 'semantic-ui-react'

export default function SingIn({signOut}) {
  return (
    <div>
        <Menu.Item>
            <Image avatar spaced="right" src="https://www.gstatic.com/webp/gallery3/1.sm.png"/>
            <Dropdown pointing="top left" text='Emre'>
                <Dropdown.Menu>
                    <Dropdown.Item text="Bilgilerim" icon="info"/>
                    <Dropdown.Item onClick={signOut} text="Çıkış Yap" icon="sign-out"/>
                </Dropdown.Menu>
            </Dropdown>
        </Menu.Item>
    </div>
  )
}
