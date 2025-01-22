import {useState} from 'react';
import {useTranslation} from 'react-i18next';
import TextInput from '../../../../components/text-input';
import LoadingSpinner from '../../../../components/loading-spinner';
import authAPIs from '../../../../api/auth';
import {useDispatch} from 'react-redux';
import {setUser} from '../../../../redux/slices/userSlice';
import Cookies from 'js-cookie';

const LoginComp = () => {
  const {t} = useTranslation();
  const appConfig = JSON.parse(localStorage.getItem('appConfig') ?? '{}');
  const [rememberMe, setRememberMe] = useState(appConfig.rememberMe || false);
  const [isLoading, setIsLoading] = useState(false);
  const [userLogin, setUserLogin] = useState({username: '', password: ''});
  const dispatch = useDispatch();

  const changeRememberMe = () => {
    const newRememberMe = !rememberMe;
    setRememberMe(newRememberMe);
    localStorage.setItem('appConfig', JSON.stringify({...appConfig, rememberMe: newRememberMe}));
  };

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const res = await authAPIs.login(userLogin);
      if (res.status === 200) {
        dispatch(setUser(res.data));
        Cookies.set('accessToken', res.data.accessToken ?? '');
        Cookies.set('refreshToken', res.data.refreshToken ?? '');
      }
    } catch (error) {
      console.error('Login failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="mt-4">
      <form className="" onSubmit={(e) => handleLogin(e)}>
        <TextInput
          placeholder={t('sys_login_username')}
          className="mb-4"
          changeText={(text) => setUserLogin({...userLogin, username: text})}
        />
        <TextInput
          placeholder={t('sys_login_password')}
          type="password"
          className="mb-4"
          changeText={(text) => setUserLogin({...userLogin, password: text})}
        />
        <div className="flex justify-between items-center mb-4">
          <label className="text-sm flex items-center">
            <input type="checkbox" checked={rememberMe} onChange={changeRememberMe} className="w-4 h-4" />
            <p className="px-2">{t('sys_login_remember')}</p> {/* Ghi nhớ tôi*/}
          </label>
          <a href="#" className="text-sm">
            {t('sys_login_forgot_password')} {/* Quên mật khẩu? */}
          </a>
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white rounded-xl py-2">
          {isLoading ? <LoadingSpinner color="white" /> : t('sys_login')}
        </button>
      </form>
    </div>
  );
};

export default LoginComp;
