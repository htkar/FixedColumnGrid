# FixedColumnGrid

fixed left or right column like excel

![demo](http://orwf5fma6.bkt.clouddn.com/fixed_column_grid_demo.png)

---

## API

| props        | Description                                                     | Type                                    | Default                                          |
|--------------|-----------------------------------------------------------------|-----------------------------------------|--------------------------------------------------|
| className    | custom css class                                                | String                                  | "fixed-column-grid"                              |
| name         | html attribute                                                  | String                                  | ""                                               |
| data         | the data of grid and is Two-dimensional array, and column first | Array                                   | [[]]                                             |
| fixedColumns | which columns you want fixed at left or right, index from 0     | Array                                   | []                                               |
| renderHeader | you can specify header cell render                              | Function(data, column_index, row_index) | &lt;div className="fixed-column__cell"&gt;{data}&lt;/div&gt; |
| renderLeft   | you can specify fixed left cell render                          | Function(data, column_index, row_index) | &lt;div className="fixed-column__cell"&gt;{data}&lt;/div&gt; |
| renderCenter | you can specify normal cell render                              | Function(data, column_index, row_index) | &lt;div className="fixed-column__cell"&gt;{data}&lt;/div&gt; |
| renderRight  | you can specify fixed right cell render                         | Function(data, column_index, row_index) | &lt;div className="fixed-column__cell"&gt;{data}&lt;/div&gt; |


## CSS

1, about border of the grid, you can refer the '.fixed-column-grid--border' css class in 'fixed-column-grid-sample.css' in example folder

2, if not enough content for container width you can use '.fixed-column-grid--center' css class to algin center the content

## example

1, $ cd <project_path>

2, $ npm install

3, $ npm run examples

4, open http://localhost:8083/demo.html

5, try to print this page
