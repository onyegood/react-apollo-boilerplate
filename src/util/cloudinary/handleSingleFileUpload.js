import axios from 'axios';
import { CLOUDINARY_URL } from '../../base';

const handleSingleFileUpload = async file => {
  const formData = new FormData();
  formData.append('file', file);
  formData.append('upload_preset', 'your_preset_here');

  return await axios.post(CLOUDINARY_URL, formData);
}

export default handleSingleFileUpload;
