import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';
import { PLANET_LINK } from '@/constant';
const Footer: React.FC = () => {
  const defaultMessage = '加油啊！兄弟！';
  const currentYear = new Date().getFullYear();
  return (
    <DefaultFooter
      copyright={`${currentYear} ${defaultMessage}`}
      links={[
        {
          key: 'Dragon website',
          title: 'Dragon website',
          href: PLANET_LINK,
          blankTarget: true,
        },
        {
          key: 'github',
          title: <GithubOutlined />,
          href: 'https://github.com/smallken',
          blankTarget: true,
        },
        {
          key: 'Dragon github',
          title: 'Dragon, 世界第一程序员！',
          href: 'https://github.com/smallken',
          blankTarget: true,
        },
      ]}
    />
  );
};
export default Footer;
