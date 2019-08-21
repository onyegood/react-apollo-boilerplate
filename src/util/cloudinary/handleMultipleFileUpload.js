import axios from 'axios';
import { CLOUDINARY_URL } from '../../base';

const handleMultipleFileUpload = async files => {
  const uploaders = files.map(file => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("tags", `codeinfuse, medium, gist`);
    formData.append("upload_preset", "your_preset_here");
    formData.append("timestamp", (Date.now() / 1000) || 0);

    return axios.post(CLOUDINARY_URL, formData, { headers: { "X-Requested-With": "XMLHttpRequest" } })
  });

  return await axios.all(uploaders).then(data => data);
}

export default handleMultipleFileUpload;