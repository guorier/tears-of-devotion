'use client'
import { Container } from "@/components/Container";
import Nav, { NavItem } from "@/components/examples/Nav";

export default function Navbar() {
  const brand = {
    title: 'home',
    img: '/images/home.svg'
  }
  const navItems: NavItem[] = [
    {
      name: 'COMPONENT',
      link: '',
      children: [
        { name: 'Input', link: '/input', },
        { name: 'Checkbox / Radio', link: '/optiongroup', },
        { name: 'Button', link: '/button', },
        { name: 'SelectBox', link: '/selectbox', },
        { name: 'Datepicker', link: '/datepicker', },
        { name: 'Textarea', link: '/textarea', },
        { name: 'Table', link: '/table', },
        { name: 'Tab', link: '/tabs', },

        { name: 'Toggle', link: '/toggle', },
        { name: 'FileUpload', link: '/fileInput', },
        { name: 'Accordion', link: '/accordion', },
        { name: 'Pagination', link: '/pagination', },
        { name: 'Modal', link: '/modal', },
        { name: 'Toast', link: '/toast', },
        { name: 'Tooltip', link: '/tooltip', },
        { name: 'Tree', link: '/folderTree', },
        { name: 'Spinner', link: '/spinner', },
        { name: 'Editor', link: '/editor', },
        { name: 'Typography', link: '/typography', },
        { name: 'Color', link: '/color', },
        { name: 'Icon', link: '/icon', },
      ]
    },
  ]
  return (
    <Container>
      <Nav brand={brand} navItems={navItems} />
    </Container>
  );
}
