# Hikari Obfuscation Flags

Danh sách các cờ biên dịch trong `Obfuscate_FLAGS` dùng để kích hoạt các kỹ thuật làm mờ mã mạnh nhất với Hikari Obfuscator.

## Obfuscate_FLAGS
```
Obfuscate_FLAGS = -mllvm -hikari -mllvm -enable-cffobf -mllvm -enable-subobf -mllvm -enable-fco -mllvm -ah_objcruntime -mllvm -enable-antihook -mllvm -ah_inline -mllvm -enable-indibran -mllvm -indibran-enc-jump-target -mllvm -ah_antirebind -mllvm -enable-bcfobf -mllvm -bcf_onlyjunkasm -mllvm -bcf_junkasm -mllvm -bcf_createfunc -mllvm -bcf_loop=4 -mllvm -bcf_prob=99 -mllvm -bcf_junkasm_minnum=2 -mllvm -bcf_junkasm_maxnum=5 -mllvm -enable-splitobf -mllvm -split_num=99 -mllvm -enable-acdobf -mllvm -acd-rename-methodimp -mllvm -enable-strcry -mllvm -strcry_prob=100 -mllvm -enable-funcwra -mllvm -fw_prob=100 -mllvm -enable-allobf -mllvm -enable-adb -mllvm -adb_prob=100 -mllvm -enable-constenc -mllvm -constenc_times=1 -mllvm -constenc_togv -mllvm -constenc_togv_prob=100 -mllvm -constenc_subxor -mllvm -constenc_subxor_prob=100
```

## Mô tả cờ

| Cờ                              | Mô tả                                                                 | Ghi chú                                                                 |
|---------------------------------|----------------------------------------------------------------------|-------------------------------------------------------------------------|
| `-mllvm -hikari`                | Kích hoạt Hikari Obfuscator.                                         | Bắt buộc khi dùng Clang/LLVM tùy chỉnh.                                |
| `-mllvm -enable-cffobf`         | Làm phẳng luồng điều khiển.                                          | Biến đổi cấu trúc điều khiển thành dạng phẳng, khó phân tích.          |
| `-mllvm -enable-subobf`         | Thay thế chỉ thị.                                                   | Thay các lệnh đơn giản bằng lệnh phức tạp hơn.                         |
| `-mllvm -enable-fco`            | Làm mờ gọi hàm.                                                     | Che giấu các lời gọi hàm, xem chi tiết tại [FunctionCallObfuscate](https://github.com/HikariObfuscator/Hikari/wiki/FunctionCallObfuscate). |
| `-mllvm -ah_objcruntime`        | Chống phân tích Objective-C runtime.                                 | Ngăn chặn phân tích runtime, mặc định tắt.                             |
| `-mllvm -enable-antihook`       | Chống hooking.                                                      | Ngăn chặn các kỹ thuật hook, có thể tăng kích thước mã trên arm64.     |
| `-mllvm -ah_inline`             | Inline chống hooking.                                               | Tăng cường chống hooking, mặc định tắt.                                |
| `-mllvm -enable-indibran`       | Nhánh gián tiếp dựa trên thanh ghi.                                 | Chuyển đổi nhánh trực tiếp thành nhánh gián tiếp, mặc định tắt.        |
| `-mllvm -indibran-enc-jump-target` | Mã hóa đích nhảy cho nhánh gián tiếp.                              | Kết hợp với `-enable-indibran`, tăng cường bảo mật.                     |
| `-mllvm -ah_antirebind`         | Chống rebinding.                                                    | Ngăn chặn kỹ thuật rebinding, mặc định tắt.                            |
| `-mllvm -enable-bcfobf`         | Luồng điều khiển giả.                                               | Chèn các khối mã giả để làm rối luồng điều khiển.                      |
| `-mllvm -bcf_onlyjunkasm`       | Chỉ chèn mã giả dạng junk assembly.                                 | Giới hạn `-enable-bcfobf` chỉ dùng mã giả, mặc định tắt.               |
| `-mllvm -bcf_junkasm`           | Chèn mã giả junk assembly.                                          | Tăng độ phức tạp cho `-enable-bcfobf`, mặc định tắt.                   |
| `-mllvm -bcf_createfunc`        | Tạo hàm giả cho luồng điều khiển giả.                               | Tăng cường làm mờ bằng cách tạo hàm giả, mặc định tắt.                 |
| `-mllvm -bcf_loop=4`            | Số lần lặp cho luồng điều khiển giả.                                | Đặt 4 lần lặp để tăng độ phức tạp, mặc định là 1.                      |
| `-mllvm -bcf_prob=99`           | Xác suất áp dụng luồng điều khiển giả là 99%.                       | Đảm bảo hầu hết các khối được làm mờ, tăng cường bảo mật.              |
| `-mllvm -bcf_junkasm_minnum=2`  | Số lượng mã giả tối thiểu trong một lần lặp.                        | Đặt tối thiểu 2 khối mã giả, tăng độ rối.                              |
| `-mllvm -bcf_junkasm_maxnum=5`  | Số lượng mã giả tối đa trong một lần lặp.                           | Đặt tối đa 5 khối mã giả, cân bằng giữa độ phức tạp và hiệu suất.      |
| `-mllvm -enable-splitobf`       | Chia khối cơ bản.                                                   | Chia các khối cơ bản thành các khối nhỏ hơn, khó phân tích.            |
| `-mllvm -split_num=99`          | Số lượng chia khối cơ bản tối đa.                                   | Đặt 99 để tối đa hóa số khối, tăng độ phức tạp phân tích.              |
| `-mllvm -enable-acdobf`         | Chống ClassDump.                                                   | Ngăn chặn phân tích ClassDump, bảo vệ mã Objective-C.                  |
| `-mllvm -acd-rename-methodimp`  | Đổi tên triển khai phương thức.                                     | Làm mờ tên phương thức trong IDA, mặc định tắt.                        |
| `-mllvm -enable-strcry`         | Mã hóa chuỗi.                                                      | Mã hóa từng byte của chuỗi, mặc định tắt.                             |
| `-mllvm -strcry_prob=100`       | Xác suất mã hóa chuỗi là 100%.                                      | Đảm bảo tất cả chuỗi được mã hóa.                                      |
| `-mllvm -enable-funcwra`        | Bao bọc hàm.                                                       | Bọc các lời gọi hàm vào thunks, mặc định tắt.                         |
| `-mllvm -fw_prob=100`           | Xác suất bao bọc hàm là 100%.                                       | Đảm bảo tất cả lời gọi hàm được bọc.                                   |
| `-mllvm -enable-allobf`         | Kích hoạt tất cả kỹ thuật làm mờ.                                   | Kích hoạt toàn bộ các kỹ thuật làm mờ có sẵn.                          |
| `-mllvm -enable-adb`            | Chống gỡ lỗi.                                                      | Chèn probe chống gỡ lỗi, mặc định tắt.                                 |
| `-mllvm -adb_prob=100`          | Xác suất chống gỡ lỗi là 100%.                                      | Đảm bảo tất cả các probe chống gỡ lỗi được chèn.                       |
| `-mllvm -enable-constenc`       | Mã hóa hằng số.                                                    | Mã hóa hằng số bằng XOR, mặc định tắt.                                |
| `-mllvm -constenc_times=1`      | Số lần mã hóa hằng số.                                             | Mặc định là 1, đảm bảo mã hóa tối thiểu.                               |
| `-mllvm -constenc_togv`         | Thay hằng số bằng biến toàn cục.                                   | Tăng độ phức tạp bằng cách dùng biến toàn cục, mặc định tắt.           |
| `-mllvm -constenc_togv_prob=100`| Xác suất thay bằng biến toàn cục là 100%.                          | Đảm bảo tất cả hằng số được thay bằng biến toàn cục.                   |
| `-mllvm -constenc_subxor`       | Sử dụng phép trừ thay vì XOR cho mã hóa hằng số.                   | Tăng đa dạng phương thức mã hóa, mặc định tắt.                         |
| `-mllvm -constenc_subxor_prob=100`| Xác suất dùng | Đảm bảo tất cả mã hóa hằng số dùng phép trừ.                           |

## Ghi chú
- Các cờ phải được thêm vào `CFLAGS` với tiền tố `-mllvm` khi biên dịch bằng Clang.
- Một số cờ (như `-enable-fco`) có tài liệu chi tiết tại [Wiki Hikari](https://github.com/HikariObfuscator/Hikari/wiki).
- Tắt trình tối ưu hóa (ví dụ: `-O0`) để tránh ảnh hưởng đến hiệu quả làm mờ.
- Các cờ LTO (Link Time Optimization) cần được truyền qua `-Wl,-mllvm,<cờ>` trong cờ liên kết.
- Giá trị `-bcf_loop=4`, `-bcf_prob=99`, và `-split_num=99` được thêm để tối ưu hóa độ phức tạp và bảo mật.