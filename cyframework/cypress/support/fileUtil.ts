import * as fs from 'fs';
import * as path from 'path';

class FileChecker {
  static async fileExistsInFolderAndSubfolders(directoryPath: string, fileName: string): Promise<boolean> {
    try {
      let normalizedDirectoryPath = path.normalize(directoryPath);

      if (!fs.existsSync(normalizedDirectoryPath)) {
        console.error(`Directory ${normalizedDirectoryPath} does not exist.`);
        return false;
      }

      const files = fs.readdirSync(normalizedDirectoryPath);

      for (const file of files) {
        const filePath = path.join(normalizedDirectoryPath, file);
        const stats = fs.statSync(filePath);

        if (stats.isDirectory()) {
          const existsInSubfolder = await this.fileExistsInFolderAndSubfolders(filePath, fileName);
          if (existsInSubfolder) {
            return true;
          }
        } else {
          if (file === fileName) {
            return true;
          }
        }
      }

      return false;
    } catch (error) {
      console.error(`Error checking file existence: ${error}`);
      return false;
    }
  }
}

export default FileChecker;
